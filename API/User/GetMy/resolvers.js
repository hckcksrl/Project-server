const resolvers = {
  Query: {
    GetMy: async (_, __, { req }) => {
      const { user } = req;
      return {
        result: true,
        error: null,
        user
      };
    }
  }
};
export default resolvers;
