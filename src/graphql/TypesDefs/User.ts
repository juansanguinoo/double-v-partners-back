import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLBoolean,
} from "graphql";

export const userType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    login: { type: GraphQLString },
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
});
