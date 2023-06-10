import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from ".";

const meta: Meta<typeof Loader> = {
  title: "UI/Loader",
  component: Loader,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {
    loading: true,
  },
};
