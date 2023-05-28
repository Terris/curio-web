import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Button } from ".";

const mockOnClick = jest.fn();
test("renders button with label", async () => {
  render(<Button label="TEST BUTTON LABEL" onClick={mockOnClick} />);
  const button = screen.getByText("TEST BUTTON LABEL");
  expect(button).toBeInTheDocument();
  await userEvent.click(button);
  expect(mockOnClick).toHaveBeenCalled();
});
