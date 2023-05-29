import { QueryResolvers } from "@/types/resolvers";
import { Note } from "../../services";

const resolveUsers: QueryResolvers["notes"] = async (parent, args, context) =>
  Note.findAll();

export default resolveUsers;
