import { getAppLayout } from "@/layout/AppLayout";
import { Button, Input, Text } from "@/ui";
import { useState } from "react";

export default function ChatPage() {
  const [prompt, setPrompt] = useState<string>("");
  const [data, setData] = useState<any>(null);

  const getChat = async () => {
    if (!prompt) return;
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
    setData(await response.json());
  };

  return (
    <>
      <Text as="h2" size={4} css={{ paddingBottom: "2rem" }}>
        Chat
      </Text>

      <div>{data?.data.choices[0].message.content}</div>

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
