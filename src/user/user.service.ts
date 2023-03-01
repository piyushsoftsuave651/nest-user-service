import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AppService } from 'src/app.service';
import { User } from './user.model';

@Injectable()
export class UsersService extends AppService{

  async createUser(userDetails: any): Promise<any> {
    try {
      const check = await User.count({ where: { email: userDetails.email } });
      if (check)
        return 'email is already in use, please provide a different email';
      const addUser: any = await User.create(userDetails);
      if (addUser) return { addUser, message: 'user created successfully' };
    } catch (error) {
      return error.message;
    }
  }
  async updateUser(userDetails: any, userId: any): Promise<any> {
    try {
      if (await User.findAll({ where: { email: userDetails.email } }))
        return 'email is already in use, please provide a different email';
      const updateUser: any = await User.update(userDetails, {
        where: { id: userId },
      });
      if (updateUser) return 'user updated successfully';
    } catch (error) {
      return error.message;
    }
  }
  async getUser(userId: any): Promise<any> {
    try {
      const getUser: any = await User.findByPk(userId);
      if (!getUser) return 'user not found';
      return getUser;
    } catch (error) {
      return error.message;
    }
  }
  async deleteUser(userId: any): Promise<any> {
    try {
      const userExists: User | any = await this.getUser(userId);
      if (userExists == 'user not found') return 'user not found';
      const deleteUser: any = await User.destroy({ where: { id: userId } });
      if (deleteUser) return 'user deleted successfully';
    } catch (error) {
      return error.message;
    }
  }
}
