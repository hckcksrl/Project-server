import { getRepository } from "typeorm";
import DetailList from "../../../Entity/DetailListSchema";

const resolvers = {
  Mutation: {
    CompletedDetailProject: async (_, args) => {
      try {
        const completed = await DetailList.findOne({
          where: {
            id: args.id
          }
        });
        if (completed.id != true) {
          await getRepository(DetailList)
            .createQueryBuilder()
            .update()
            .set({ completed: true })
            .where({ id: args.id });
          return {
            result: true,
            error: false
          };
        } else {
          await getRepository(DetailList)
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
