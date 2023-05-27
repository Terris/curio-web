import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Text } from ".";

test("renders button with label", async () => {
  render(<Text>TEST TEXT</Text>);
  expect(screen.getByText("TEST TEXT")).toBeInTheDocument();
});
