import { UserDto } from "../dto/UserDto";
import { User } from "../models/user.model";

export interface UserRepositoryInterface {
  findAll(): Promise<User[]>;
  createUser(user: UserDto): Promise<User>;
}
