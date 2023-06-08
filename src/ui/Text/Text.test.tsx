import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Text } from ".";

test("renders text withchildren", async () => {
  render(<Text>TEST TEXT</Text>);
  expect(screen.getByText("TEST TEXT")).toBeInTheDocument();
});
