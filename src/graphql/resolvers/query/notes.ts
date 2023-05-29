import { QueryResolvers } from "@/types/resolvers";
import * as notes from "../../services/notes";

const resolveUsers: QueryResolvers["notes"] = async (parent, args, context) =>
  notes.findAll();

export default resolveUsers;
