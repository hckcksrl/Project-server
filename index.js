import { GraphQLServer } from "graphql-yoga";
import resolvers from "./resolvers";
import { createConnection } from "typeorm";
import ConnectionOptions from "./database";

const server = new GraphQLServer({
  typeDefs: "schema.graphql",
  resolvers
});

const appOption = {
  port: 4000,
  endpoint: "/graphql",
  playground: "/playground",
  subscriptions: "/subscriptions"
};

createConnection(ConnectionOptions)
  .then(() => {
    server.start(() => console.log("Start"));
  })
  .catch(error => console.log(error));
