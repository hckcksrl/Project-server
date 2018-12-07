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
  projectName = String;

  @OneToMany(type => SubProjects, sub_projects => sub_projects.ProjectId)
  subProject = SubProjects;

  @ManyToOne(type => Users, users => users.project, { cascade: true })
  userId = Users;
}
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
