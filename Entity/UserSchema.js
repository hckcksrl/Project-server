import Sequelize from "sequelize";
import Connection from "../database";
import Projects from "./ProjectSchema";

const Users = Connection.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },
  {
    tableName: "users",
    timestamps: false
  }
);
export default Users;

// export const User = new EntitySchema({
//   name: "Users",
//   target: Users,
//   columns: {
//     id: {
//       primary: true,
//       type: Number,
//       generated: true
//     },
//     email: {
//       type: String,
//       length: 50,
//       unique: true
//     },
//     password: {
//       type: String,
//       length: 30,
//       nullable: false
//     }
//   },
//   relations: {
//     project: {
//       type: "on-to-many",
//       target: "Projects",
//       joinTable: true,
//       cascade: true
//     }
//   }
// });

// import {
//   BaseEntity,
//   Column,
//   Entity,
//   OneToMany,
//   PrimaryGeneratedColumn
// } from "typeorm";
// import bcrypt from "bcrypt";
// import Projects from "./ProjectSchema";

// @Entity({ synchronize: true })
// class Users extends BaseEntity {
//   @PrimaryGeneratedColumn() id = undefined;

//   @Column({ type: "text", nullable: false, unique: true })
//   email = "";

//   @Column({ type: "text", nullable: false })
//   password = "";

//   @OneToMany(type => Projects, projects => projects.user_)
//   project = Projects;

//   ComparePassword(password) {
//     return bcrypt.compare(password, this.password);
//   }
// }
