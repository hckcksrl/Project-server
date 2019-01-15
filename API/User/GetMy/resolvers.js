const resolvers = {
  Query: {
    GetMy: (_, args, { req }) => {
      const { user } = req;

      return {
        result: true,
        error: null,
        user: user
      };
    }
  }
};
export default resolvers;
