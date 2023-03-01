import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UsersService) {}

  @MessagePattern('adduser')
  insertData(userDetails: any): Promise<any> {
    return this.userService.createUser(userDetails);
  }
  @MessagePattern('getuser')
  getData(userId: any): any {
    return this.userService.getUser(userId);
  }
  @MessagePattern('updateuser')
  updateData(userDetails: any): any {
    return this.userService.updateUser(userDetails, userDetails.userId);
  }
  @MessagePattern('deleteuser')
  deleteData(userId: any): any {
    return this.userService.deleteUser(userId);
  }
}
