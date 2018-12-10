// import Users from "./Entity/UserSchema";
// import Projects from "./Entity/ProjectSchema";
// import SubProjects from "./Entity/SubProjectSchema";
// import DetailList from "./Entity/DetailListSchema";

// const ConnectionOptions = {
//   type: "postgres",
//   database: "project",
//   synchronize: true,
//   logging: false,
//   entities: [Users, Projects, SubProjects, DetailList],
//   host: "localhost",
//   port: 5432,
//   username: "hckcksrl",
//   password: "1234"
// };

// export default ConnectionOptions;

import Sequelize from "sequelize";

const Connection = new Sequelize("project", "hckcksrl", "1234", {
  host: "localhost",
  dialect: "postgres",
  port: 5432,
  operatorsAliases: false
});
export default Connection;
// const Users = Connection.define(
//   "users",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       unique: true,
//       primaryKey: true
//     },
//     email: {
//       type: Sequelize.STRING,
//       allowNull: false,
//       unique: true
//     },
//     password: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   },
//   {
//     tableName: "users",
//     timestamps: false
//   }
// );
// const Projects = Connection.define(
//   "projects",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       autoIncrement: true,
//       allowNull: false,
//       primaryKey: true
//     },
//     projectname: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   },
//   {
//     tableName: "projects",
//     timestamps: false
//   }
// );
// const SubProjects = Connection.define(
//   "subprojects",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       allowNull: false,
//       autoIncrement: true,
//       primaryKey: true
//     },
//     subprojectname: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   },
//   {
//     tableName: "subprojects",
//     timestamps: false
//   }
// );
// const DetailList = Connection.define(
//   "detail_list",
//   {
//     id: {
//       type: Sequelize.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false
//     },
//     detailname: {
//       type: Sequelize.STRING,
//       allowNull: false
//     }
//   },
//   {
//     tableName: "detail_list",
//     timestamps: false
//   }
// );
// Users.hasMany(Projects, { foreignKey: "id" });
// Projects.belongsTo(Users, { foreignKey: "id" });

// Projects.hasMany(SubProjects, { foreignKey: "id" });
// SubProjects.belongsTo(Projects, { foreignKey: "id" });

// SubProjects.hasMany(DetailList, { foreignKey: "id" });
// DetailList.belongsTo(SubProjects, { foreignKey: "id" });

// Connection.sync();
