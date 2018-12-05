import { User } from "./Entity/UserSchema";
import { Project } from "./Entity/ProjectSchema";
import { SubProject } from "./Entity/SubProjectSchema";
import { Detail } from "./Entity/DetailListSchema";

const ConnectionOptions = {
  type: "postgres",
  database: "project",
  synchronize: true,
  logging: false,
  entities: [User, Project, SubProject, Detail],
  host: "localhost",
  port: 5432,
  username: "hckcksrl",
  password: "1234"
};

export default ConnectionOptions;
