import { EntitySchema } from "typeorm";
import { DetailList } from "../Model/DetailList";

module.exports = new EntitySchema({
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
      target: "SubProject"
    }
  }
});
