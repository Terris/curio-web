import type { Meta, StoryObj } from "@storybook/react";
import { TextButton } from ".";

const meta: Meta<typeof TextButton> = {
  title: "UI/TextButton",
  component: TextButton,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextButton>;

export const Primary: Story = {
  args: {
    onClick: () => console.log("Clicked"),
    children: "Hello World",
  },
};
