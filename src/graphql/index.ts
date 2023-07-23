import { GraphQLSchema, GraphQLObjectType } from "graphql";
import { CREATE_USER } from "./Mutations/User";
import { GET_ALL_USERS } from "./Queries/User";

const rootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: GET_ALL_USERS,
  },
});

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createUser: CREATE_USER,
  },
});

export const schema = new GraphQLSchema({
  query: rootQuery,
  mutation,
});
