import { GraphQLServer } from "graphql-yoga";
// import resolvers from "./resolvers";
// import { createConnection } from "typeorm";
// import ConnectionOptions from "./database";
import schema from "./schema";
import Relation from "./Entity/Relation";
import Connection from "./database";

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
Relation();
server.start(appOption, result);

// Relation();
// createConnection(ConnectionOptions)
//   .then(() => {
// server.start(appOption, result);
// })
// .catch(error => console.log(error));
