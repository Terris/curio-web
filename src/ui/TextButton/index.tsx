import { styled } from "../stitches.config";

interface TextButtonProps {
  label?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export const TextButton = ({
  label,
  children,
  onClick,
  ...props
}: TextButtonProps) => (
  <StyledTextButton {...props} onClick={onClick}>
    {label ?? children}
  </StyledTextButton>
);

export const StyledTextButton = styled("button", {
  background: "none",
  color: "inherit",
  border: "none",
  padding: "0.5rem",
  cursor: "pointer",
  fontSize: "$1",
});
