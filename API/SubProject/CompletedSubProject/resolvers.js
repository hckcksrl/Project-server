import { getRepository } from "typeorm";
import SubProjects from "../../../Entity/SubProjectSchema";

const resolvers = {
  Mutation: {
    CompletedSubProject: async (_, args) => {
      try {
        const completed = await SubProjects.findOne({
          where: {
            id: args.id
          }
        });
        if (completed.id != true) {
          await getRepository(SubProjects)
            .createQueryBuilder()
            .update()
            .set({ completed: true })
            .where({ id: args.id });
          return {
            result: true,
            error: false
          };
        } else {
          await getRepository(SubProjects)
            .createQueryBuilder()
            .update()
            .set({ completed: false })
            .where({ id: args.id });
          return {
            result: true,
            error: false
          };
        }
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
