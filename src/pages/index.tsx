import { Text, styled } from "@/ui";

export default function Home() {
  return (
    <Hero>
      <Text size={2}>
        Transform your experiences into captivating stories, preserving the
        essence of your journey in a single, remarkable platform. Let your story
        unfold, one chapter at a time.
      </Text>
    </Hero>
  );
}

const Hero = styled("div", {
  maxWidth: "620px",
  margin: "0 auto",
});
