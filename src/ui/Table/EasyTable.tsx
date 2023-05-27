import { removeItemsFromObject } from "@/utils";
import { Table } from ".";

type DataItem =
  | { [key: string]: string | number | null | undefined }
  | null
  | undefined;

interface EasyTableProps {
  keyExtractor?: string;
  data: DataItem[];
  skipItems?: string[];
}

export const EasyTable = ({
  data,
  keyExtractor,
  skipItems,
}: EasyTableProps) => {
  const filteredData = !skipItems
    ? data
    : data.map((record) =>
        removeItemsFromObject({ record, removeItems: skipItems })
      );
  console.log("Filtered Data", filteredData);
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
                <Table.Cell key={`${value}`}>{value}</Table.Cell>
              ))}
            </Table.Row>
          ) : null
        )}
      </Table.Body>
    </Table>
  );
};
