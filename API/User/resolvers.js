import { User } from "../../Entity/UserSchema";
import * as typeorm from "typeorm";
import db from "../../database";

const resolvers = {
  Query: {
    GetUser: async (_, args) => {
      const users = await User.options;
      console.log(users);
      if (users != null) {
        return {
          result: true,
          error: null,
          user: users
        };
      } else {
        return {
          result: false,
          error: "not fonud",
          user: null
        };
      }
    }
  }
};

export default resolvers;
