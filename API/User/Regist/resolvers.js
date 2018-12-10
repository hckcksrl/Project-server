import Connection from "../../../database";
import CreateJwt from "../../../JwtToken/CreateToken";

const resolvers = {
  Mutation: {
    Regist: async (_, args) => {
      try {
        const user = await Connection.model("users").findOne({
          where: {
            email: args.email
          }
        });
        if (user) {
          return {
            result: false,
            error: "user exist",
            token: false
          };
        } else {
          const createUser = Connection.model("users").create({ ...args });
          const token = await CreateJwt(createUser.email, createUser.password);
          return {
            result: true,
            error: null,
            token: token
          };
        }
      } catch (error) {
        return {
          result: false,
          error: "error",
          token: null
        };
      }
    }
  }
};

export default resolvers;
