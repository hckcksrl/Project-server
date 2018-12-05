import { EntitySchema } from "typeorm";
import { SubProjects } from "../Model/SubProject";
import { Projects } from "../Model/Project";

export const SubProject = new EntitySchema({
  name: "SubProjects",
  target: SubProjects,
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true
    },
    SubProjectName: {
      type: String,
      nullable: false
    }
  },
  relations: {
    DetailList: {
      type: "on-to-many",
      target: "DetailList",
      joinTable: true,
      cascade: true
    },
    ProjectId: {
      type: "many-to-one",
      target: "Projects",
      joinTable: true,
      cascade: true
    }
  }
});
