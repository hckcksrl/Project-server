import { getRepository } from "typeorm";
import DetailList from "../../../Entity/DetailListSchema";

const resolvers = {
  Mutation: {
    DeleteDetailProject: async (_, args) => {
      try {
        await getRepository(DetailList)
          .createQueryBuilder()
          .delete()
          .from(DetailList)
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
