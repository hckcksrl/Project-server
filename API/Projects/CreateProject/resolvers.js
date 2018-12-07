import Projects from "../../../Entity/ProjectSchema";
import { getRepository } from "typeorm";

const resolvers = {
  Mutation: {
    CreateProject: async (_, args) => {
      try {
        const repo = getRepository(Projects);
        console.log(
          await repo
            .createQueryBuilder()
            .insert()
            .into(Projects)
            .values({ projectName: args.projectName, userId: args.userId })
            .execute()
        );
        return {
          result: true,
          error: null
        };
      } catch (error) {
        return {
          result: false,
          error: "error"
        };
      }
    }
  }
};
export default resolvers;
