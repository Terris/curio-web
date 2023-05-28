import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { TextButton } from ".";

const mockOnClick = jest.fn();
test("renders button with label", async () => {
  render(<TextButton label="TEST BUTTON LABEL" onClick={mockOnClick} />);
  const textButton = screen.getByText("TEST BUTTON LABEL");
  expect(textButton).toBeInTheDocument();
  await userEvent.click(textButton);
  expect(mockOnClick).toHaveBeenCalled();
});
