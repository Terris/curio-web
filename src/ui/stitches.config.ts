import { createStitches } from "@stitches/react";
import { grayDark, greenDark } from "@radix-ui/colors";

export const { reset, styled, globalCss, getCssText } = createStitches({
  theme: {
    colors: {
      ...grayDark,
      ...greenDark,
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
    },
    fontSizes: {
      1: "1rem",
      2: "1.25rem",
      3: "1.5rem",
      4: "2rem",
    },
    fonts: {
      inconsolata: "'Inconsolata', sans-serif",
      mono: "Söhne Mono, menlo, monospace",
    },
    fontWeights: {
      normal: 400,
      bold: 700,
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    bp1: "(min-width: 480px)",
  },
  utils: {
    marginX: (value: number) => ({ marginLeft: value, marginRight: value }),
  },
});

export const globalStyles = globalCss({
  "*": { margin: 0, padding: 0, fontFamily: "$inconsolata" },
  body: {
    backgroundColor: "$gray3",
    color: "$gray12",
    fontSize: "$1",
  },
});
