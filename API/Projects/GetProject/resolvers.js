import Projects from "../../../Entity/ProjectSchema";

const resolvers = {
  Query: {
    GetProject: async (_, args) => {
      const project = await Projects.findOne({
        where: {
          id: args.id
        }
      });
      console.log(project);
      if (project != null) {
        return {
          result: true,
          error: null,
          project: project
        };
      } else {
        return {
          result: false,
          error: "not found",
          project: null
        };
      }
    }
  }
};

export default resolvers;
