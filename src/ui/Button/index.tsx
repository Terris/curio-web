import { styled } from "../stitches.config";

export interface ButtonProps {
  primary?: boolean;
  label: string;
  onClick?: () => void;
}

export const Button = ({ primary, label, ...props }: ButtonProps) => {
  return (
    <StyledButton type="button" primary={primary} {...props}>
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
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$gray4",
  },
  variants: {
    primary: {
      true: {
        backgroundColor: "$green9",
        "&:hover": {
          backgroundColor: "$green10",
        },
      },
    },
    size: {
      medium: {
        padding: "1rem 2rem",
      },
    },
  },
});
