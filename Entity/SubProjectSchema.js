import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import DetailList from "./DetailListSchema";
import Projects from "./ProjectSchema";

@Entity()
class SubProjects extends BaseEntity {
  @PrimaryGeneratedColumn() id = undefined;

  @Column({ type: "text", nullable: false })
  SubProjectName = "";

  @ManyToOne(type => Projects, projects => projects.id)
  ProjectId = undefined;

  @OneToMany(type => DetailList, detail_list => detail_list.DetailName)
  DetailList = DetailList;
}
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
