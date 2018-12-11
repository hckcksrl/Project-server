import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import SubProjects from "./SubProjectSchema";
import Users from "./UserSchema";

@Entity()
class Projects extends BaseEntity {
  @PrimaryGeneratedColumn() id = undefined;

  @Column({ type: "text", nullable: false })
  projectname = "";

  @OneToMany(type => SubProjects, sub_projects => sub_projects.project_)
  subproject = SubProjects;

  @ManyToOne(type => Users, users => users.project, {
    cascade: true,
    nullable: false,
    onDelete: "CASCADE"
  })
  user_ = Users;
}
export default Projects;
