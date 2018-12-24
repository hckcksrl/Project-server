// import Connection from "../../../database";
import { getRepository } from "typeorm";
import Projects from "../../../Entity/ProjectSchema";

const resolvers = {
  Mutation: {
    CreateProject: async (_, args, { req }) => {
      try {
        const { user } = req;

        await getRepository(Projects)
          .createQueryBuilder()
          .insert()
          .into("projects", Projects)
          .values({ projectname: args.projectname, user_: user.id })
          .execute();

        return {
          result: true,
          error: null
        };
      } catch (error) {
        console.log(args);
        return {
          result: false,
          error: "error"
        };
      }
    }
  }
};
export default resolvers;
