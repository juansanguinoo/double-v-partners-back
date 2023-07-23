import express from "express";
import { ApolloServer } from "@apollo/server";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import http from "http";
import { AppDataSource } from "./db";

export const startApolloServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({
    schema,
  });

  await server.start();

  app.use("/graphql", cors(), express.json(), expressMiddleware(server));

  AppDataSource.initialize()
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error(err);
    });

  await new Promise((resolve) => httpServer.listen({ port: 3000 }));
};
