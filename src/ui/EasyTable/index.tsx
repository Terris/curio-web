import { removeItemsFromObject } from "@/utils";
import { Table } from "../Table";

type DataItem =
  | { [key: string]: string | number | boolean | null | undefined }
  | null
  | undefined;

interface EasyTableProps {
  data: DataItem[];
  skipItems?: string[];
}

const formatValue = (value: string | number | boolean | null | undefined) => {
  if (typeof value === "boolean" && value === true) return "true";
  return value;
};

export const EasyTable = ({ data, skipItems }: EasyTableProps) => {
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
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {filteredData.map((row, index) =>
          row ? (
            <Table.Row key={`easy-table-row-${index}`}>
              {Object.values(row).map((value) => (
                <Table.Cell key={`${value}`}>{formatValue(value)}</Table.Cell>
              ))}
            </Table.Row>
          ) : null
        )}
      </Table.Body>
    </Table>
  );
};
