import Connection from "../../../database";
import Projects from "../../../Entity/ProjectSchema";

const resolvers = {
  Query: {
    GetUser: async (_, args) => {
      // const users = await getRepository(Users)
      //   .createQueryBuilder("users")
      //   .where("id = :id", { id: args.id })
      //   .execute();
      const users = await Connection.model("users").findOne({
        where: {
          id: args.id
        }
      });
      if (users != null) {
        return {
          result: true,
          error: null,
          user: users
        };
      } else {
        return {
          result: false,
          error: "not fonud",
          user: null
        };
      }
    }
  }
};

export default resolvers;
