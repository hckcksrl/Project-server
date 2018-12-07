import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import SubProjects from "./SubProjectSchema";

@Entity()
class DetailList extends BaseEntity {
  @PrimaryGeneratedColumn() id = undefined;

  @Column({ type: "text", nullable: false })
  DetailName = "";

  @ManyToOne(type => SubProjects, sub_projects => sub_projects.DetailList, {
    cascade: true
  })
  SubProjectId = SubProjects;
}
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
