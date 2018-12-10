import Sequelize from "sequelize";
import Connection from "../database";
import Users from "./UserSchema";

const Projects = Connection.define(
  "projects",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    projectname: {
      type: Sequelize.STRING,
      allowNull: false
    }
    // user_id: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Users,
    //     key: "id"
    //   },
    //   allowNull: false
    // }
  },
  {
    tableName: "projects",
    timestamps: false
  }
);

export default Projects;

// export const Project = new EntitySchema({
//   name: "Projects",
//   target: Projects,
//   columns: {
//     id: {
//       primary: true,
//       type: Number,
//       generated: true
//     },
//     projectName: {
//       type: String,
//       nullable: false
//     }
//   },
//   relations: {
//     subProject: {
//       type: "one-to-many",
//       target: "SubProjects",
//       joinTable: true,
//       cascade: true
//     },
//     userId: {
//       type: "many-to-one",
//       target: "Users",
//       joinTable: true,
//       cascade: true
//     }
//   }
// });

// TypeOrm

// import {
//   BaseEntity,
//   Column,
//   Entity,
//   OneToMany,
//   PrimaryGeneratedColumn,
//   ManyToOne
// } from "typeorm";
// import SubProjects from "./SubProjectSchema";
// import Users from "./UserSchema";

// @Entity()
// class Projects extends BaseEntity {
//   @PrimaryGeneratedColumn() id = undefined;

//   @Column({ type: "text", nullable: false })
//   projectname = "";

//   @OneToMany(type => SubProjects, sub_projects => sub_projects.project_)
//   subproject = SubProjects;

//   @ManyToOne(type => Users, users => users.project, {
//     cascade: true,
//     nullable: false
//   })
//   user_ = Users;
// }
