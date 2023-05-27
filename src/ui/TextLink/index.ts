import Link from "next/link";
import { styled } from "../stitches.config";

export const TextLink = styled(Link, {
  color: "$green10",
  textDecoration: "none",
  "&:hover": {
    color: "$green11",
  },
});
