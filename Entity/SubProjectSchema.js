import { EntitySchema } from "typeorm";
import { SubProject } from "../Model/SubProject";

module.exports = new EntitySchema({
  name: "SubProject",
  target: SubProject,
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true
    },
    SubProjectName: {
      type: String
    }
  },
  relations: {
    DetailList: {
      type: "on-to-many",
      target: "DetailList"
    },
    ProjectId: {
      type: "many-to-one",
      target: "Project"
    }
  }
});
