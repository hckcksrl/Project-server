import { GraphQLServer, PubSub } from "graphql-yoga";
import resolvers from "./resolvers";
import * as typeorm from "typeorm";
import { User } from "./Entity/UserSchema";
import { Project } from "./Entity/ProjectSchema";
import { SubProject } from "./Entity/SubProjectSchema";
import { Detail } from "./Entity/DetailListSchema";

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
    entities: [User, Project, SubProject, Detail],
    host: "localhost",
    port: 5432,
    username: "hckcksrl",
    password: "1234"
  })
  .then(() => {
    server.start(() => console.log("Start"));
  });
