import { styled, Text } from "@/ui";
import { Navigation } from "../Navigation";

export function Masthead() {
  return (
    <StyledMasthead>
      <Text as="h1" size={1}>
        Curio
      </Text>
      <Navigation />
    </StyledMasthead>
  );
}

const StyledMasthead = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
});
