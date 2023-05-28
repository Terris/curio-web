import { styled } from "@stitches/react";
import { TextButton } from "../TextButton";

export const IconButton = styled(TextButton, {
  "&:hover": {
    color: "$gray11",
  },
});
