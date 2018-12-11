import { getRepository } from "typeorm";
import DetailList from "../../../Entity/DetailListSchema";

const resolvers = {
  Mutation: {
    CreateDetailProject: async (_, args) => {
      try {
        await getRepository(DetailList)
          .createQueryBuilder()
          .insert()
          .into(DetailList)
          .values({
            detailname: args.detailname,
            subproject_: args.subprojectid
          })
          .execute();
        return {
          result: true,
          error: null
        };
      } catch (error) {
        return {
          result: false,
          error: "Create Fail"
        };
      }
    }
  }
};

export default resolvers;
