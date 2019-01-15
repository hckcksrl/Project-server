import Projects from "../../../Entity/ProjectSchema";
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

        const project = await Projects.findOne({
          where: {
            id: args.id
          }
        });
        return {
          result: true,
          error: null,
          project: project
        };
      } catch (error) {
        return {
          result: false,
          error: "Edit False",
          project: null
        };
      }
    }
  }
};
export default resolvers;
