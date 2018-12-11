import { GraphQLServer } from "graphql-yoga";
import { createConnection } from "typeorm";
import ConnectionOptions from "./database";
import schema from "./schema";

const server = new GraphQLServer({
  schema
});

const appOption = {
  port: 4000,
  endpoint: "/graphql",
  playground: "/playground",
  subscriptions: "/subscriptions"
};

const result = () => console.log("Start");
createConnection(ConnectionOptions)
  .then(() => {
    server.start(appOption, result);
  })
  .catch(error => console.log(error));
