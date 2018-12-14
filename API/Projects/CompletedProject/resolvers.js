import { getRepository } from "typeorm";
import Projects from "../../../Entity/ProjectSchema";

const resolvers = {
  Mutation: {
    CompletedSubProject: async (_, args) => {
      try {
        const completed = await Projects.findOne({
          where: {
            id: args.id
          }
        });
        if (completed.id != true) {
          await getRepository(Projects)
            .createQueryBuilder()
            .update()
            .set({ completed: true })
            .where({ id: args.id });
          return {
            result: true,
            error: false
          };
        } else {
          await getRepository(Projects)
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
