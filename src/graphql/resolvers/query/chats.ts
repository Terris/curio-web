import { QueryResolvers } from "@/types/resolvers";
import { Chat } from "../../services";
import { GraphQLError } from "graphql";
import { authorize } from "../utils";

const resolveChats: QueryResolvers["chats"] = async (parent, args, context) => {
  try {
    authorize([{ condition: context.session.user.isAdmin }]);
    return Chat.findAll();
  } catch (error: any) {
    return Promise.reject(new GraphQLError(error));
  }
};

export default resolveChats;
