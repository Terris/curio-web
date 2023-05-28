import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu, DropdownMenuProps } from ".";

const meta: Meta<DropdownMenuProps> = {
  title: "UI/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<DropdownMenuProps>;

export const Default: Story = {
  render: () => (
    <DropdownMenu>
      <DropdownMenu.Trigger>Trigger</DropdownMenu.Trigger>
      <DropdownMenu.Menu>
        <ul>
          <li>Item one</li>
          <li>Item two</li>
          <li>Item three</li>
        </ul>
      </DropdownMenu.Menu>
    </DropdownMenu>
  ),
  args: {},
};
