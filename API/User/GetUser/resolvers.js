import Users from "../../../Entity/UserSchema";

const resolvers = {
  Query: {
    GetUser: async (_, args) => {
      const users = await Users.findOne({
        where: {
          id: args.id
        }
      });
      console.log(users);
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
