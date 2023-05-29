import { removeItemsFromObject } from "@/utils";
import { Table } from "../Table";
import React, { createElement } from "react";

type DataItem = Record<string, unknown> | null | undefined;

interface EasyTableProps {
  data: DataItem[];
  renderActions?: React.FunctionComponent<{ rowData: DataItem }>;
  skipItems?: string[];
}

const formatValue = (value: unknown) => {
  if (typeof value === "boolean" && value === true) return "true";
  if (typeof value === "number") return value.toString();
  if (typeof value === "string") return value;
  return null;
};

export const EasyTable = ({
  data,
  renderActions,
  skipItems,
}: EasyTableProps) => {
  const filteredData = !skipItems
    ? data
    : data.map((record) =>
        removeItemsFromObject({ record, removeItems: skipItems })
      );
  const headings = filteredData[0] ? Object.keys(filteredData[0]) : [];
  return (
    <Table>
      <Table.Head>
        <Table.Row>
          {headings.map((heading) => (
            <Table.Cell key={heading}>{heading}</Table.Cell>
          ))}
          {renderActions && <Table.Cell>Actions</Table.Cell>}
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {filteredData.map((row, index) =>
          row ? (
            <Table.Row key={`easy-table-row-${index}`}>
              {Object.values(row).map((value) => (
                <Table.Cell key={`${value}`}>{formatValue(value)}</Table.Cell>
              ))}
              {renderActions && (
                <Table.Cell>
                  {createElement(renderActions, { rowData: row })}
                </Table.Cell>
              )}
            </Table.Row>
          ) : null
        )}
      </Table.Body>
    </Table>
  );
};
