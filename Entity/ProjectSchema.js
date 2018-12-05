import { EntitySchema } from "typeorm";
import { Project } from "../Model/Project";

module.exports = new EntitySchema({
  name: "Project",
  target: Project,
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true
    },
    projectName: {
      type: String
    }
  },
  relations: {
    SubProject: {
      type: "on-to-many",
      target: "SubProject"
    },
    userId: {
      type: "many-to-one",
      target: "User"
    }
  }
});
