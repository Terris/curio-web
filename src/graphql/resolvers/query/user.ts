import { QueryResolvers } from "@/types/resolvers";
import { User } from "../../services";
import { GraphQLError } from "graphql";
import { authorize } from "../utils";

const resolveUser: QueryResolvers["user"] = async (parent, args, context) => {
  try {
    authorize(
      [
        { condition: context.session.user !== null },
        { condition: context.session.user.id === args.id },
      ],
      context.session.user.isAdmin
    );
    return User.findById(args.id);
  } catch (error: any) {
    return Promise.reject(new GraphQLError(error));
  }
};

export default resolveUser;
