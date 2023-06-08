import { getPublicLayout } from "@/layout/PublicLayout";
import { signIn } from "next-auth/react";
import { Button, Input, Text, styled } from "@/ui";
import { useState } from "react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState<boolean>(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    signIn("email", { email, callbackUrl: "/dashboard" });
  }

  return (
    <SignInWrapper>
      <Text size={3} css={{ paddingBottom: "2rem", textAlign: "center" }}>
        Sign In
      </Text>
      <form onSubmit={handleSubmit}>
        <Input
          label="Email address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
        />
        <Button type="submit" label="Sign in with Email" disabled={loading} />
      </form>
    </SignInWrapper>
  );
}

SignInPage.getLayout = getPublicLayout;

const SignInWrapper = styled("div", {
  maxWidth: "400px",
  margin: "0 auto",
});
