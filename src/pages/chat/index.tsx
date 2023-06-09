import { getAppLayout } from "@/layout/AppLayout";
import { Button, Input, Text } from "@/ui";
import { useState } from "react";
import { marked } from "marked";
import { graphql } from "@/types/gql";
import { useLazyQuery } from "@apollo/client";
import { ChatCompletionMessage } from "@/types/graphql";
import { useFragment } from "@/types";

export default function ChatPage() {
  const [prompt, setPrompt] = useState<string>("");
  const [messages, setMessages] = useState<ChatCompletionMessage[]>([]);

  const [getChatCompletion, { data, loading, error }] = useLazyQuery(
    CHAT_COMPLETION_QUERY_DOCUMENT
  );

  const chatCompletion = useFragment(
    CHAT_COMPLETION_FIIELDS_FRAGMENT,
    data?.chatCompletion
  );

  const parsedCompletion = !chatCompletion
    ? null
    : marked.parse(chatCompletion.message?.content);

  function handlePromptSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    getChatCompletion({
      variables: {
        input: {
          messages: [
            {
              role: "user",
              content: prompt,
            },
          ],
        },
      },
    });
  }

  return (
    <>
      <Text as="h2" size={4} css={{ paddingBottom: "1rem" }}>
        Chat
      </Text>

      {loading && <Text css={{ paddingBottom: "2rem" }}>Loading...</Text>}
      {error && (
        <Text css={{ paddingBottom: "2rem" }} color="red">
          Something went wrong. Please try again.
        </Text>
      )}
      {parsedCompletion && (
        <Text as="div" css={{ whiteSpace: "pre-wrap" }}>
          <div dangerouslySetInnerHTML={{ __html: parsedCompletion }} />
        </Text>
      )}
      <form onSubmit={handlePromptSubmit}>
        <Input
          label="Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button type="submit" label="Chat" primary />
      </form>
    </>
  );
}

ChatPage.getLayout = getAppLayout;

export const CHAT_COMPLETION_FIIELDS_FRAGMENT = graphql(/* GraphQL */ `
  fragment ChatCompletionFields on ChatCompletion {
    id
    message {
      role
      content
    }
  }
`);

const CHAT_COMPLETION_QUERY_DOCUMENT = graphql(/* GraphQL */ `
  query ChatCompletion($input: ChatCompletionInput!) {
    chatCompletion(input: $input) {
      ...ChatCompletionFields
    }
  }
`);
