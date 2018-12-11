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
  subprojectname = "";

  @ManyToOne(type => Projects, projects => projects.subproject, {
    cascade: true,
    nullable: false,
    onDelete: "CASCADE"
  })
  project_ = Projects;

  @OneToMany(type => DetailList, detail_list => detail_list.SubProject)
  detaillist = DetailList;
}
export default SubProjects;
