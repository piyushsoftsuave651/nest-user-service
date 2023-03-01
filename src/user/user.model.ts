import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  Sequelize,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: Sequelize.literal('uuid_generate_v4()'),
  })
  public id!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public firstName!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  public lastName!: string;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  public isActive!: boolean;

  @Column({ type: DataType.TEXT, allowNull: false })
  public email!: string;
}
