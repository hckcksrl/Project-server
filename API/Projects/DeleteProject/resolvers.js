import Projects from "../../../Entity/ProjectSchema";
import { getRepository } from "typeorm";

const resolvers = {
  Mutation: {
    DeleteProject: async (_, args) => {
      try {
        const repo = getRepository(Projects);
        console.log(
          await repo
            .createQueryBuilder()
            .delete()
            .from(Projects)
            .where("id = :id and userId = :userId", { id: args.id, userId: 1 })
            .execute()
        );

        // if (project.user === 1) {
        return {
          result: true,
          error: null
        };
        // } else {
        // return {
        //   result: false,
        //   error: "not auth"
        // };
        // }
      } catch (error) {
        return {
          result: false,
          error: "not found"
        };
      }
    }
  }
};
export default resolvers;
