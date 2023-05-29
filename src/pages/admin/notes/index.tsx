import { getAdminLayout } from "@/layout/AdminLayout";
import { EasyTable, Text } from "@/ui";
import { useQuery } from "@apollo/client";
import { graphql } from "@/types";
import { NotesQuery } from "@/types/graphql";

export default function AdminUsersPage() {
  const { data, loading, error } = useQuery(notesQueryDocument);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Text as="h2" size={4}>
        Notes
      </Text>
      <NotesView notes={data?.notes} />
    </>
  );
}

interface NotesViewProps {
  notes: NotesQuery["notes"];
  loading?: boolean;
}

const NotesView = ({ notes, loading }: NotesViewProps) => {
  if (loading) return <p>Loading...</p>;
  if (!notes) return <p>No notes</p>;
  return <EasyTable data={notes} skipItems={["__typename"]} />;
};

AdminUsersPage.getLayout = getAdminLayout;

const notesQueryDocument = graphql(`
  query Notes {
    notes {
      id
      title
      content
      userId
    }
  }
`);
