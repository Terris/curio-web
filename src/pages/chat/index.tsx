import { getAppLayout } from "@/layout/AppLayout";
import { Button, Input, Text } from "@/ui";
import { useState } from "react";

export default function ChatPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const getChat = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
      const responseData = await response.json();
      if (responseData) {
        setData(responseData);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Text as="h2" size={4} css={{ paddingBottom: "2rem" }}>
        Chat
      </Text>

      <Text css={{ paddingBottom: "2rem" }}>
        {loading && "Loading..."}
        {data?.data?.choices?.[0].message?.content}
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
