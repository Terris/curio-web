import { Text } from "../Text";
import { styled } from "../stitches.config";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: string;
}

export const Input = ({ label, type, ...props }: InputProps) => {
  return (
    <Field>
      <Label>
        {label && <Text css={{ paddingBottom: "0.5rem" }}>{label}</Text>}
        <StyledInput {...props} type={type} />
      </Label>
    </Field>
  );
};

const Field = styled("div", {
  padding: "1rem 0",
});

const Label = styled("label", {
  display: "block",
  width: "100%",
});

const StyledInput = styled("input", {
  fontSize: "$1",
  width: "100%",
  padding: "1rem 2rem",
  backgroundColor: "$gray4",
  border: "1px solid $gray6",
  "&:focus": {
    outline: "none",
    borderColor: "$gray8",
  },
});
