import type { Meta, StoryObj } from "@storybook/react";
import { Table } from ".";

const meta: Meta<typeof Table> = {
  title: "UI/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    children: "Hello World",
  },
};
