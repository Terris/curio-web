import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TextButton } from ".";

test("renders button with label", async () => {
  render(<TextButton label="TEST BUTTON LABEL" />);
  expect(screen.getByText("TEST BUTTON LABEL")).toBeInTheDocument();
});
