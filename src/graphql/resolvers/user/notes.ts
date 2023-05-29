import { UserResolvers } from "@/types/resolvers";
import { Note } from "../../services";

export const resolveUsersNotes: UserResolvers["notes"] = async (
  parent,
  args,
  context
) => Note.findAllByUserId(parent.id);

export default resolveUsersNotes;
