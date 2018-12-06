import SubProjects from "../../Entity/SubProjectSchema";

const resolvers = {
  Query: {
    GetSubProject: async (_, args) => {
      const subProject = await SubProjects.findOne({
        where: {
          id: args.id
        }
      });
      if (subProject != null) {
        return {
          result: true,
          error: null,
          subproject: subProject
        };
      } else {
        return {
          result: false,
          error: "not found",
          subproject: null
        };
      }
    }
  }
};
