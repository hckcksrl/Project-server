import DetailList from "../../Entity/DetailListSchema";

const resolvers = {
  Query: {
    GetDetailList: async (_, args) => {
      const detail = await DetailList.find({
        where: {
          id: args.id
        }
      });
      if (detail != null) {
        return {
          result: true,
          error: null,
          detail: detail
        };
      } else {
        return {
          result: false,
          error: "not found",
          detail: null
        };
      }
    }
  }
};
