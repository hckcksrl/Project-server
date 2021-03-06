// import Connection from "../../../database";
import CreateJwt from "../../../JwtToken/CreateToken";
import Users from "../../../Entity/UserSchema";
import { getRepository } from "typeorm";

const resolvers = {
  Mutation: {
    Regist: async (_, args) => {
      try {
        const user = await Users.findOne({
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
          await getRepository(Users)
            .createQueryBuilder()
            .insert()
            .into("users", Users)
            .values({ ...args })
            .execute();

          const token = CreateJwt(args.email);
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
