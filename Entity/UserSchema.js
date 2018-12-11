import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import bcrypt from "bcrypt";
import Projects from "./ProjectSchema";

@Entity({ synchronize: true })
class Users extends BaseEntity {
  @PrimaryGeneratedColumn() id = undefined;

  @Column({ type: "text", nullable: false, unique: true })
  email = "";

  @Column({ type: "text", nullable: false })
  password = "";

  @OneToMany(type => Projects, projects => projects.user_)
  project = Projects;

  ComparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
}
export default Users;
