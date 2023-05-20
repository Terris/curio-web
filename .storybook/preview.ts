import type { Preview } from "@storybook/react";
import { globalStyles } from "../src/components";
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "dark",
    },
  },
  decorators: [
    (Story) => {
      globalStyles();
      return Story();
    },
  ],
};

export default preview;
