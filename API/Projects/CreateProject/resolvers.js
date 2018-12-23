// import Connection from "../../../database";
import { getRepository } from "typeorm";
import Projects from "../../../Entity/ProjectSchema";

const resolvers = {
  Mutation: {
    CreateProject: async (_, args) => {
      try {
        console.log(
          await getRepository(Projects)
            .createQueryBuilder()
            .insert()
            .into("projects", Projects)
            .values({ projectname: args.projectname, user_: args.userid })
            .execute()
        );

        return {
          result: true,
          error: null
        };
      } catch (error) {
        console.log(args);
        return {
          result: false,
          error: "aa"
        };
      }
    }
  }
};
export default resolvers;
