import { QueryResolvers } from "@/types/resolvers";
import { Note } from "../../services";
import { GraphQLError } from "graphql";
import { authorize } from "../utils";

const resolveNotes: QueryResolvers["notes"] = async (parent, args, context) => {
  console.log(context);
  try {
    authorize([{ condition: context.session.user.isAdmin }]);
    return Note.findAll();
  } catch (error: any) {
    return Promise.reject(new GraphQLError(error));
  }
};

export default resolveNotes;
