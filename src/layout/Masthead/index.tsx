import { styled, Text } from "@/ui";
import { Navigation } from "../Navigation";

export function Masthead() {
  return (
    <StyledMasthead>
      <Text as="h1" size={1}>
        Curiograph
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
