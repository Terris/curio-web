import { styled } from "../stitches.config";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  primary,
  label,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <StyledButton primary={primary} {...props}>
      {label}
    </StyledButton>
  );
};

const StyledButton = styled("button", {
  backgroundColor: "$gray4",
  border: "none",
  padding: "1rem 2rem",
  fontFamily: "$mono",
  borderRadius: "0.25rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "$gray5",
  },
  "&:focus": {
    outline: "$gray8 auto 1px",
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
