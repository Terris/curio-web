import { ChatResolvers } from "@/types/resolvers";
import { ChatMessage } from "../../services";

export const resolveChatMessages: ChatResolvers["chatMessages"] = async (
  parent,
  args,
  context
) => ChatMessage.findAllByChatId(parent.id);

export default resolveChatMessages;
