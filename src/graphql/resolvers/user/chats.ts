import { UserResolvers } from "@/types/resolvers";
import { Chat } from "../../services";
import { authorize } from "../utils";
import { GraphQLError } from "graphql";

export const resolveUsersChats: UserResolvers["chats"] = async (
  parent,
  args,
  context
) => {
  try {
    authorize(
      [
        { condition: context.session.user !== null },
        { condition: context.session.user.id === parent.id },
      ],
      context.session.user.isAdmin
    );
    return Chat.findAllByUserId(parent.id);
  } catch (error: any) {
    return Promise.reject(new GraphQLError(error));
  }
};

export default resolveUsersChats;
