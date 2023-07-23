import { GraphQLString, GraphQLInt, GraphQLBoolean } from "graphql";
import { UserRepositoryImpl } from "../../infrastructure/repositories/UserRepositoryImpl";
import { userType } from "../TypesDefs/User";
import { CreateUserUseCase } from "../../domain/useCases/createUserUseCase.usecase";

export const CREATE_USER = {
  type: userType,
  args: {
    login: { type: GraphQLString },
    id: { type: GraphQLInt },
    nodeID: { type: GraphQLString },
    avatarURL: { type: GraphQLString },
    gravatarID: { type: GraphQLString },
    url: { type: GraphQLString },
    htmlURL: { type: GraphQLString },
    followersURL: { type: GraphQLString },
    followingURL: { type: GraphQLString },
    gistsURL: { type: GraphQLString },
    starredURL: { type: GraphQLString },
    subscriptionsURL: { type: GraphQLString },
    organizationsURL: { type: GraphQLString },
    reposURL: { type: GraphQLString },
    eventsURL: { type: GraphQLString },
    receivedEventsURL: { type: GraphQLString },
    type: { type: GraphQLString },
    siteAdmin: { type: GraphQLBoolean },
    name: { type: GraphQLString },
    company: { type: GraphQLString },
    blog: { type: GraphQLString },
    location: { type: GraphQLString },
    email: { type: GraphQLString },
    hireable: { type: GraphQLBoolean },
    bio: { type: GraphQLString },
    twitterUsername: { type: GraphQLString },
    publicRepos: { type: GraphQLInt },
    publicGists: { type: GraphQLInt },
    followers: { type: GraphQLInt },
    following: { type: GraphQLInt },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString },
  },
  async resolve(_: any, args: any) {
    const userRepository = new UserRepositoryImpl();
    const createUserUseCase = new CreateUserUseCase(userRepository);

    try {
      const userToCreate = await createUserUseCase.execute(args);
      return { ...args };
    } catch (error) {
      return error;
    }
  },
};
