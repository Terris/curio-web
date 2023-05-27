import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from ".";

test("renders button with label", async () => {
  render(<Button label="TEST BUTTON LABEL" />);
  expect(screen.getByText("TEST BUTTON LABEL")).toBeInTheDocument();
});
