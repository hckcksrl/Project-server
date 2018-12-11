import Projects from "../../../Entity/ProjectSchema";
import { astFromValue } from "graphql";
import { getRepository } from "typeorm";

const resolvers = {
  Mutation: {
    EditProject: async (_, args) => {
      try {
        await getRepository(Projects)
          .createQueryBuilder()
          .update()
          .set({ projectname: args.projectname })
          .where({ id: args.id })
          .execute();
        return {
          result: true,
          error: null
        };
      } catch (error) {
        return {
          result: false,
          error: "Edit False"
        };
      }
    }
  }
};
export default resolvers;
