import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { EasyTable } from ".";

const mockData = [
  {
    id: "TEST_ID",
    name: "TEST_NAME",
    description: "TEST_DESCRIPTION",
    status: "TEST_STATUS",
  },
];

test("renders Table with all headers and data", async () => {
  render(<EasyTable data={mockData} />);

  expect(screen.getByText("id")).toBeInTheDocument();
  expect(screen.getByText("name")).toBeInTheDocument();
  expect(screen.getByText("description")).toBeInTheDocument();
  expect(screen.getByText("status")).toBeInTheDocument();
  expect(screen.getByText("TEST_ID")).toBeInTheDocument();
  expect(screen.getByText("TEST_NAME")).toBeInTheDocument();
  expect(screen.getByText("TEST_DESCRIPTION")).toBeInTheDocument();
  expect(screen.getByText("TEST_STATUS")).toBeInTheDocument();
});

test("renders Table without skipped items", async () => {
  render(<EasyTable data={mockData} skipItems={["description"]} />);

  expect(screen.getByText("id")).toBeInTheDocument();
  expect(screen.getByText("name")).toBeInTheDocument();
  expect(screen.queryByText("description")).toBeFalsy();
  expect(screen.getByText("status")).toBeInTheDocument();
  expect(screen.getByText("TEST_ID")).toBeInTheDocument();
  expect(screen.getByText("TEST_NAME")).toBeInTheDocument();
  expect(screen.queryByText("TEST_DESCRIPTION")).toBeFalsy();
  expect(screen.getByText("TEST_STATUS")).toBeInTheDocument();
});
