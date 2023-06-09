import { QueryResolvers } from "@/types/resolvers";
import { User } from "../../services";
import { authorize } from "../utils";
import { GraphQLError } from "graphql";

const resolveUsers: QueryResolvers["users"] = async (parent, args, context) => {
  try {
    authorize([{ condition: context.session.user.isAdmin }]);
    return User.findAll();
  } catch (error: any) {
    return Promise.reject(new GraphQLError(error));
  }
};

export default resolveUsers;
