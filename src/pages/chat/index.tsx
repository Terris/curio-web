import { getAppLayout } from "@/layout/AppLayout";
import { Button, Input, Loader, Text, styled } from "@/ui";
import { useState } from "react";
import { marked } from "marked";
import { graphql } from "@/types/gql";
import { useLazyQuery } from "@apollo/client";
import { ChatCompletionMessage } from "@/types/graphql";
import { useFragment } from "@/types";

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
    <PageWrapper>
      <Text as="h2" size={4} css={{ paddingBottom: "1rem" }}>
        Chat
      </Text>
      <Loader loading={loading} />
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
          placeholder="Ask me anything..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <Button type="submit" label="Chat" primary />
      </form>
    </PageWrapper>
  );
}

ChatPage.getLayout = getAppLayout;

const PageWrapper = styled("div", {
  maxWidth: "600px",
  margin: "0 auto",
});
