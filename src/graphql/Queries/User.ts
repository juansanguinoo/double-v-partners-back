import { GraphQLList } from "graphql";
import { userType } from "../TypesDefs/User";
import { UserRepositoryImpl } from "../../infrastructure/repositories/UserRepositoryImpl";
import { GetAllUsersUseCase } from "../../domain/useCases/getAllUsersUseCase.usecase";

export const GET_ALL_USERS = {
  type: new GraphQLList(userType),
  async resolve() {
    const userRepository = new UserRepositoryImpl();
    const getUsersUseCase = new GetAllUsersUseCase(userRepository);

    try {
      const users = await getUsersUseCase.execute();
      return users;
    } catch (error) {
      return error;
    }
  },
};
