import { UserResolvers } from "@/types/resolvers";
import { Chat } from "../../services";

export const resolveUsersChats: UserResolvers["chats"] = async (
  parent,
  args,
  context
) => Chat.findAllByUserId(parent.id);

export default resolveUsersChats;
