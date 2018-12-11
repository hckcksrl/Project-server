import { getRepository } from "typeorm";
import SubProjects from "../../../Entity/SubProjectSchema";

const resolvers = {
  Mutation: {
    DeleteSubProject: async (_, args) => {
      try {
        await getRepository(SubProjects)
          .createQueryBuilder()
          .delete()
          .from(SubProjects)
          .where({ id: args.id })
          .execute();
        return {
          result: true,
          error: null
        };
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