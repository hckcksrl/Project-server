import Users from "./UserSchema";
import Projects from "./ProjectSchema";
import SubProjects from "./SubProjectSchema";
import DetailList from "./DetailListSchema";
import Connection from "../database";

const Relation = () => {
  Users.hasMany(Projects);
  Projects.belongsTo(Users);

  Projects.hasMany(SubProjects);
  SubProjects.belongsTo(Projects);

  SubProjects.hasMany(DetailList);
  DetailList.belongsTo(SubProjects);

  Connection.sync();
};
export default Relation;
