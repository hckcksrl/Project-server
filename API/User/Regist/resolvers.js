import Users from "../../../Entity/UserSchema";
import CreateJwt from "../../../JwtToken/CreateToken";
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
          const repo = getRepository(Users);
          await repo
            .createQueryBuilder()
            .insert()
            .into(Users)
            .values({ email: args.email, password: args.password })
            .execute();

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
