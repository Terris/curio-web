import { UserResolvers } from "@/types/resolvers";
import * as notes from "../../services/notes";

export const resolveUsersNotes: UserResolvers["notes"] = async (
  parent,
  args,
  context
) => notes.findAllByUserId(parent.id);

export default resolveUsersNotes;
