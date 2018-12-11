import { getRepository } from "typeorm";
import DetailList from "../../../Entity/DetailListSchema";

const resolvers = {
  Mutation: {
    EditDetailProject: async (_, args) => {
      try {
        await getRepository(DetailList)
          .createQueryBuilder()
          .update()
          .set({ detailname: args.detailname })
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
