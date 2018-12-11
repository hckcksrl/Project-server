// import Connection from "../../../database";
import { getConnection } from "typeorm";
import Projects from "../../../Entity/ProjectSchema";

const resolvers = {
  Mutation: {
    CreateProject: async (_, args) => {
      try {
        await getConnection()
          .createQueryBuilder()
          .insert()
          .into(Projects)
          .values({ projectname: args.projectname, user_: args.userid })
          .execute();
        return {
          result: true,
          error: null
        };
      } catch (error) {
        return {
          result: false,
          error: "aa"
        };
      }
    }
  }
};
export default resolvers;
