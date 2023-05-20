import { styled } from "../stitches.config";

export interface ButtonProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  label: string;
  onClick?: () => void;
}

export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button" {...props}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled("button", {
  backgroundColor: "$gray3",
  color: "white",
  border: "none",
  padding: "1rem 2rem",
  fontFamily: "$mono",
  borderRadius: "0.25rem",
  "&:hover": {
    backgroundColor: "$gray4",
    cursor: "pointer",
  },
  variants: {
    primary: {
      true: {
        backgroundColor: "$green500",
      },
    },
    size: {
      medium: {
        padding: "1rem 2rem",
      },
    },
  },
});
