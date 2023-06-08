import { getAppLayout } from "@/layout/AppLayout";
import { Button, Input, Text } from "@/ui";
import { useState } from "react";
import { marked } from "marked";

export default function ChatPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const getChat = async () => {
    if (!prompt) return;
    setLoading(true);
    setData(null);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      console.log(await response);
      const responseData = await response.json();
      if (responseData) {
        setData(responseData);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const completion = data?.data?.choices?.[0].message?.content;

  const parsedCompletion = !completion
    ? null
    : marked.parse(data?.data?.choices?.[0].message?.content);

  return (
    <>
      <Text as="h2" size={4} css={{ paddingBottom: "2rem" }}>
        Chat
      </Text>

      <Text css={{ paddingBottom: "2rem" }}>{loading && "Loading..."}</Text>
      <Text as="div" css={{ whiteSpace: "pre-wrap" }}>
        {parsedCompletion && (
          <div dangerouslySetInnerHTML={{ __html: parsedCompletion }} />
        )}
      </Text>

      <Input
        label="Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <Button label="Chat" primary onClick={getChat} />
    </>
  );
}

ChatPage.getLayout = getAppLayout;
