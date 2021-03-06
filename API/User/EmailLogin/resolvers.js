import Connection from "../../../database";
import CreateJwt from "../../../JwtToken/CreateToken";
import Users from "../../../Entity/UserSchema";

const resolvers = {
  Mutation: {
    Login: async (_, args) => {
      try {
        const user = await Users.findOne({
          where: {
            email: args.email
          }
        });
        if (user == null) {
          return {
            result: false,
            error: "not found",
            token: null,
            id: null
          };
        } else {
          // const checkPass = user.ComparePassword(args.password);
          const checkPass = "asd";
          if (checkPass == user.password) {
            const token = CreateJwt(user.email);
            return {
              result: true,
              error: null,
              token: token,
              id: user.id
            };
          } else {
            return {
              result: false,
              error: "password not",
              token: null,
              id: null
            };
          }
        }
      } catch (error) {
        return {
          result: false,
          error: "error",
          token: null,
          id: null
        };
      }
    }
  }
};

export default resolvers;
