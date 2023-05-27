import { styled } from "../stitches.config";

interface TextButtonProps {
  label: string;
}

export const TextButton = ({ label, ...props }: TextButtonProps) => (
  <StyledTextButton {...props}>{label}</StyledTextButton>
);

export const StyledTextButton = styled("button", {
  background: "none",
  color: "inherit",
  border: "none",
  padding: "0.5rem",
  cursor: "pointer",
  fontSize: "$1",
});
