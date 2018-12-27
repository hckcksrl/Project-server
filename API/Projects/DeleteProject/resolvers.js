import Projects from "../../../Entity/ProjectSchema";
import { getRepository } from "typeorm";

const resolvers = {
  Mutation: {
    DeleteProject: async (_, args, { req }) => {
      try {
        const { user } = req;
        await getRepository(Projects)
          .createQueryBuilder()
          .delete()
          .from(Projects)
          .where({ id: args.id, user_: user.id })
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
