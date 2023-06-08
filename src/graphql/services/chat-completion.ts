import { ChatCompletionInput } from "@/types/resolvers";

const createCompletion = async (input: ChatCompletionInput) => {
  const apiKey = process.env.OPENAI_API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";
  const body = JSON.stringify({
    model: "gpt-3.5-turbo",
    stream: false,
    messages: input.messages,
  });
  return await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body,
  });
};

const ChatCompletion = {
  createCompletion,
};

export default ChatCompletion;
