import { ChatResolvers } from "@/types/resolvers";
import { ChatMessage } from "../../services";
import { authorize } from "../utils";
import { GraphQLError } from "graphql";

export const resolveChatMessages: ChatResolvers["chatMessages"] = async (
  parent,
  args,
  context
) => {
  try {
    authorize([
      { condition: context.session.user !== null },
      { condition: parent.id === context.session.user.id },
    ]);
    return ChatMessage.findAllByChatId(parent.id);
  } catch (error: any) {
    return Promise.reject(new GraphQLError(error));
  }
};

export default resolveChatMessages;
