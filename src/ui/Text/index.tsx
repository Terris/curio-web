import { styled } from "../stitches.config";

export const Text = styled("p", {
  lineHeight: "1.25",
  fontSize: "$1",
  variants: {
    size: {
      1: { fontSize: "$1" },
      2: { fontSize: "$2" },
      3: { fontSize: "$3" },
      4: { fontSize: "$4" },
    },
    weight: {
      normal: { fontWeight: "$normal" },
      bold: { fontWeight: "$bold" },
    },
  },
});
