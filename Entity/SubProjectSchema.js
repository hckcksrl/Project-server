import Sequelize from "sequelize";
import Connection from "../database";
import Projects from "./ProjectSchema";

const SubProjects = Connection.define(
  "subprojects",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    subprojectname: {
      type: Sequelize.STRING,
      allowNull: false
    }
    // project_id: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: Projects,
    //     key: "id"
    //   },
    //   allowNull: false
    // }
  },
  {
    tableName: "subprojects",
    timestamps: false
  }
);
export default SubProjects;

// export const SubProject = new EntitySchema({
//   name: "SubProjects",
//   target: SubProjects,
//   columns: {
//     id: {
//       primary: true,
//       type: Number,
//       generated: true
//     },
//     SubProjectName: {
//       type: String,
//       nullable: false
//     }
//   },
//   relations: {
//     DetailList: {
//       type: "on-to-many",
//       target: "DetailList",
//       joinTable: true,
//       cascade: true
//     },
//     ProjectId: {
//       type: "many-to-one",
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
//   PrimaryGeneratedColumn,
//   ManyToOne
// } from "typeorm";
// import DetailList from "./DetailListSchema";
// import Projects from "./ProjectSchema";

// @Entity()
// class SubProjects extends BaseEntity {
//   @PrimaryGeneratedColumn() id = undefined;

//   @Column({ type: "text", nullable: false })
//   subprojectname = "";

//   @ManyToOne(type => Projects, projects => projects.subproject, {
//     cascade: true,
//     nullable: false
//   })
//   project_ = Projects;

//   @OneToMany(type => DetailList, detail_list => detail_list.SubProject)
//   detaillist = DetailList;
// }
