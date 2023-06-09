import { QueryResolvers } from "@/types/resolvers";
import { ChatCompletion } from "../../services";
import { GraphQLError } from "graphql";
import { authorize, validateInput } from "../utils";

const resolveCreateChatCompletion: QueryResolvers["chatCompletion"] = async (
  parent,
  args,
  context
) => {
  try {
    authorize([{ condition: context.session.user !== null }]);
    validateInput([{ condition: Boolean(args.input) }]);

    const response = await ChatCompletion.createCompletion(args.input);
    const data = await response.json();
    if (!data) throw new Error("Failed to create chat completion.");
    const completion = data;
    console.log(completion);
    return {
      id: completion.id,
      message: completion.choices[0].message,
    };
  } catch (error: any) {
    return Promise.reject(new GraphQLError(error));
  }
};

export default resolveCreateChatCompletion;
