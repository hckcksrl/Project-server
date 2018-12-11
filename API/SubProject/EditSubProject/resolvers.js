import { getRepository } from "typeorm";
import SubProjects from "../../../Entity/SubProjectSchema";

const resolvers = {
  Mutation: {
    EditSubProject: async (_, args) => {
      try {
        await getRepository(SubProjects)
          .createQueryBuilder()
          .update()
          .set({ subprojectname: args.subprojectname })
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
