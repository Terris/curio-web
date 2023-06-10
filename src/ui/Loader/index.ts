import { keyframes, styled } from "../stitches.config";

const loaderAnimation = keyframes({
  "0%": { transform: "scale(0)", opacity: 1 },
  "100%": { transform: "scale(1)", opacity: 0 },
});

export const Loader = styled("div", {
  display: "none",
  margin: "0 auto",
  width: "30px",
  height: "30px",
  position: "relative",
  "&:after, &:before": {
    opacity: 0,
    content: "",
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    border: "4px solid $gray11",
    position: "absolute",
    left: 0,
    top: 0,
    animation: `${loaderAnimation} 2s linear infinite`,
  },
  "&:after": {
    animationDelay: "1s",
  },
  variants: {
    loading: {
      true: {
        display: "block",
      },
    },
  },
});
