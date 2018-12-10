import Connection from "../../../database";

const resolvers = {
  Mutation: {
    CreateProject: async (_, args) => {
      try {
        console.log(
          await Connection.model("projects").create({
            projectname: args.projectname,
            userId: args.userid
          })
        );
        return {
          result: true,
          error: null
        };
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
