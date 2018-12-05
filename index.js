import { GraphQLServer, PubSub } from "graphql-yoga";
import resolvers from "./resolvers";
import * as typeorm from "typeorm";

const server = new GraphQLServer({
  typeDefs: "schema.graphql",
  resolvers
});

typeorm
  .createConnection({
    type: "postgres",
    database: "project",
    synchronize: true,
    logging: false,
    entities: [
      require("./Entity/UserSchema"),
      require("./Entity/SubProjectSchema"),
      require("./Entity/ProjectSchema"),
      require("./Entity/DetailProjectSchema")
    ],
    host: "localhost",
    port: 5432,
    username: "hckcksrl",
    password: "1234"
  })
  .then(() => {
    server.start(() => console.log("Start"));
  });
