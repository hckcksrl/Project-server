import Sequelize from "sequelize";
import Connection from "../database";
import SubProjects from "./SubProjectSchema";
const DetailList = Connection.define(
  "detail_list",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    detailname: {
      type: Sequelize.STRING,
      allowNull: false
    }
    // subproject_id: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: SubProjects,
    //     key: "id"
    //   },
    //   allowNull: false
    // }
  },
  {
    tableName: "detail_list",
    timestamps: false
  }
);

export default DetailList;

// export const Detail = new EntitySchema({
//   name: "DetailList",
//   target: DetailList,
//   columns: {
//     id: {
//       primary: true,
//       type: Number,
//       generated: true
//     },
//     DetailName: {
//       type: String
//     }
//   },
//   relations: {
//     SubProjectId: {
//       type: "many-to-one",
//       target: "SubProjects"
//     }
//   }
// });

// import {
//   BaseEntity,
//   Column,
//   Entity,
//   PrimaryGeneratedColumn,
//   ManyToOne
// } from "typeorm";
// import SubProjects from "./SubProjectSchema";

// @Entity()
// class DetailList extends BaseEntity {
//   @PrimaryGeneratedColumn() id = undefined;

//   @Column({ type: "text", nullable: false })
//   detailname = "";

//   @ManyToOne(type => SubProjects, sub_projects => sub_projects.DetailList, {
//     cascade: true
//   })
//   subproject_ = SubProjects;
// }
