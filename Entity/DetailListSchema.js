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
  detailname = "";

  @Column({ type: "boolean", default: false })
  completed = false;

  @ManyToOne(type => SubProjects, sub_projects => sub_projects.DetailList, {
    cascade: true
  })
  subproject_ = SubProjects;
}
export default DetailList;
