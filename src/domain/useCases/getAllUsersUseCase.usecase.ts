import { User } from "../models/user.model";
import { UserRepositoryInterface } from "../repositories/user.repository.interface";

export class GetAllUsersUseCase {
  constructor(private userRepository: UserRepositoryInterface) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
