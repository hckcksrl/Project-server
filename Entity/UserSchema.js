import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import bcrypt from "bcrypt";
import Projects from "./ProjectSchema";

@Entity()
class Users extends BaseEntity {
  @PrimaryGeneratedColumn() id = undefined;

  @Column({ type: "text", nullable: false, unique: true })
  email = "";

  @Column({ type: "text", nullable: false })
  password = "";

  @OneToMany(type => Projects, projects => projects.user)
  project = Projects;

  ComparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}
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
