import { getPublicLayout } from "@/layout/PublicLayout";
import { Text, styled } from "@/ui";
export default function HomePage() {
  return (
    <Hero>
      <Text size={3}>
        Transform your experiences into captivating stories, preserving the
        essence of your journey in a single, remarkable platform. Let your story
        unfold, one chapter at a time.
      </Text>
    </Hero>
  );
}

HomePage.getLayout = getPublicLayout;

const Hero = styled("div", {
  maxWidth: "620px",
});
