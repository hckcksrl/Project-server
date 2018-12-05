import { EntitySchema } from "typeorm";
import { DetailList } from "../Model/DetailList";

export const Detail = new EntitySchema({
  name: "DetailList",
  target: DetailList,
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true
    },
    DetailName: {
      type: String
    }
  },
  relations: {
    SubProjectId: {
      type: "many-to-one",
      target: "SubProjects"
    }
  }
});
