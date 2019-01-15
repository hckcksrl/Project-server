// import Connection from "../../../database";
import { getRepository } from "typeorm";
import Projects from "../../../Entity/ProjectSchema";

const resolvers = {
  Mutation: {
    CreateProject: async (_, args, { req }) => {
      try {
        const { user } = req;

        await getRepository(Projects)
          .createQueryBuilder()
          .insert()
          .into("projects", Projects)
          .values({ projectname: args.projectname, user_: user.id })
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
          error: "error",
          project: null
        };
      }
    }
  }
};
export default resolvers;
