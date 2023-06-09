import { UserResolvers } from "@/types/resolvers";
import { Note } from "../../services";
import { GraphQLError } from "graphql";
import { authorize } from "../utils";

export const resolveUsersNotes: UserResolvers["notes"] = async (
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
    return Note.findAllByUserId(parent.id);
  } catch (error: any) {
    return Promise.reject(new GraphQLError(error));
  }
};

export default resolveUsersNotes;
