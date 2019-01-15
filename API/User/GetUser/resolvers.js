import Projects from "../../../Entity/ProjectSchema";
import Users from "../../../Entity/UserSchema";
import SubProjects from "../../../Entity/SubProjectSchema";
import DetailList from "../../../Entity/DetailListSchema";
const resolvers = {
  User: {
    project: async ({ id }, args) => {
      return await Projects.find({
        where: {
          user_: id
        },
        order: {
          id: "ASC"
        }
      });
    }
  },
  Project: {
    subproject: async ({ id }, args) => {
      return await SubProjects.find({
        where: {
          project_: id
        }
      });
    }
  },
  SubProject: {
    detaillist: async ({ id }, args) => {
      return await DetailList.find({
        where: {
          subproject_: id
        }
      });
    }
  },
  Query: {
    GetUser: async (_, args) => {
      const users = await Users.findOne({
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
