import { UserDto } from "../dto/UserDto";
import { User } from "../models/user.model";
import { UserRepositoryInterface } from "../repositories/user.repository.interface";

export class CreateUserUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(user: UserDto): Promise<User> {
    return await this.userRepository.createUser(user);
  }
}
