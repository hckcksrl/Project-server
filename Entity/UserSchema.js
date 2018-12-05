import { EntitySchema } from "typeorm";
import { User } from "../Model/User";

module.exports = new EntitySchema({
  name: "User",
  target: User,
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true
    },
    email: {
      type: String,
      length: 40,
      unique: true
    },
    password: {
      type: String,
      length: 15
    }
  },
  relations: {
    project: {
      type: "on-to-many",
      target: "Project"
    }
  }
});
