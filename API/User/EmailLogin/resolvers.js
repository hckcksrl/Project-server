import Users from "../../../Entity/UserSchema";
import CreateJwt from "../../../JwtToken/CreateToken";

const resolvers = {
  Mutation: {
    Login: async (_, args) => {
      try {
        const user = await Users.findOne({
          where: {
            email: args.email
          }
        });
        if (!user) {
          return {
            result: false,
            error: "not found",
            token: null
          };
        }
        const checkPass = user.ComparePassword(args.password);
        if (checkPass) {
          const token = CreateJwt(user.email);
          return {
            result: true,
            error: null,
            token: token
          };
        } else {
          return {
            result: false,
            error: "password not",
            token: null
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
