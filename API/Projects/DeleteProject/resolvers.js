import Projects from "../../../Entity/ProjectSchema";

const resolvers = {
  Mutation: {
    DeleteProject: async (_, args) => {
      try {
        const project = await Projects.findOne({
          where: {
            projectName: args.projectName
          }
        });
        if (project.userIdId == args.userId) {
          project.remove();
          return {
            result: true,
            error: null
          };
        } else {
          return {
            result: false,
            error: "not auth"
          };
        }
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
