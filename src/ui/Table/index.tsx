import { styled } from "../stitches.config";

interface TableProps {
  children: React.ReactNode;
}

export const Table = ({ children }: TableProps) => {
  return <StyledTable>{children}</StyledTable>;
};

const StyledTable = styled("table", {
  width: "100%",
});

const Head = styled("thead", {
  fontWeight: "bold",
  borderCollapse: "collapse",
});
const Body = styled("tbody", {});
const Foot = styled("tfoot", {});
const Row = styled("tr", {});
const Cell = styled("td", {
  borderBottom: "1px solid $gray4",
  padding: "1rem",
});

Table.Head = Head;
Table.Body = Body;
Table.Foot = Foot;
Table.Row = Row;
Table.Cell = Cell;
