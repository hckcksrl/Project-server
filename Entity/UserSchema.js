import { EntitySchema } from "typeorm";
import { Users } from "../Model/User";

export const User = new EntitySchema({
  name: "Users",
  target: Users,
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true
    },
    email: {
      type: String,
      length: 50,
      unique: true
    },
    password: {
      type: String,
      length: 30,
      nullable: false
    }
  },
  relations: {
    project: {
      type: "on-to-many",
      target: "Projects",
      joinTable: true,
      cascade: true
    }
  }
});
