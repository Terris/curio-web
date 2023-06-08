import { QueryResolvers } from "@/types/resolvers";
import { Chat } from "../../services";

const resolveChats: QueryResolvers["chats"] = async (parent, args, context) =>
  Chat.findAll();

export default resolveChats;
