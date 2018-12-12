import Users from "./Entity/UserSchema";
import Projects from "./Entity/ProjectSchema";
import SubProjects from "./Entity/SubProjectSchema";
import DetailList from "./Entity/DetailListSchema";
import dotenv from "dotenv";
dotenv.config({ path: "./bin/.env" });

const ConnectionOptions = {
  type: "postgres",
  database: "projects",
  synchronize: true,
  logging: false,
  entities: [Users, Projects, SubProjects, DetailList],
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};

export default ConnectionOptions;
