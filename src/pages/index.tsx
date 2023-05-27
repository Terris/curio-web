import { getPublicLayout } from "@/layout/PublicLayout";
import { Text, styled } from "@/ui";
export default function HomePage() {
  return <Hero></Hero>;
}

HomePage.getLayout = getPublicLayout;

const Hero = styled("div", {
  maxWidth: "620px",
});
