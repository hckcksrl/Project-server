import SubProjects from "../../../Entity/SubProjectSchema";
import { getRepository } from "typeorm";

const resolvers = {
  Mutation: {
    CreateSubProject: async (_, args) => {
      try {
        await getRepository(SubProjects)
          .createQueryBuilder()
          .insert()
          .into(SubProjects)
          .values({
            subprojectname: args.subprojectname,
            project_: args.projectid
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
