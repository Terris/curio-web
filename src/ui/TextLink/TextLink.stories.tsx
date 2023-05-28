import type { Meta, StoryObj } from "@storybook/react";
import { TextLink } from ".";

const meta: Meta<typeof TextLink> = {
  title: "UI/TextLink",
  component: TextLink,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextLink>;

export const Primary: Story = {
  args: {
    onClick: () => console.log("Clicked"),
    children: "Hello World",
  },
};
