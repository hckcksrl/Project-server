import Users from "./Entity/UserSchema";
import Projects from "./Entity/ProjectSchema";
import SubProjects from "./Entity/SubProjectSchema";
import DetailList from "./Entity/DetailListSchema";

const ConnectionOptions = {
  type: "postgres",
  database: "project",
  synchronize: true,
  logging: false,
  entities: [Users, Projects, SubProjects, DetailList],
  host: "localhost",
  port: 5432,
  username: "hckcksrl",
  password: "1234"
};

export default ConnectionOptions;
