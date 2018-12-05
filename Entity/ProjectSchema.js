import { EntitySchema } from "typeorm";
import { Projects } from "../Model/Project";
import { Users } from "../Model/User";

export const Project = new EntitySchema({
  name: "Projects",
  target: Projects,
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true
    },
    projectName: {
      type: String,
      nullable: false
    }
  },
  relations: {
    subProject: {
      type: "on-to-many",
      target: "SubProjects",
      joinTable: true,
      cascade: true
    },
    userId: {
      type: "many-to-one",
      target: "Users",
      joinTable: true,
      cascade: true
    }
  }
});
