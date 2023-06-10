import { getAdminLayout } from "@/layout/AdminLayout";
import { EasyTable, IconButton, Loader, Text } from "@/ui";
import { useQuery } from "@apollo/client";
import { graphql } from "@/types/gql";
import { NotesQuery, NotesFieldsFragment, Maybe } from "@/types/graphql";
import { RiPencilFill } from "react-icons/ri";

export default function AdminUsersPage() {
  const { data, loading, error } = useQuery(ADMIN_NOTES_QUERY_DOCUMENT);
  if (loading) return <Loader loading={loading} />;
  if (error) return <Text>Error :(</Text>;
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
  return (
    <EasyTable
      data={notes}
      renderActions={({ rowData }) => <Actions data={rowData} />}
      skipItems={["__typename"]}
    />
  );
};

const Actions = ({ data }: { data?: Maybe<Partial<NotesFieldsFragment>> }) => {
  if (!data?.id) return null;
  return (
    <IconButton onClick={() => console.log(data)}>
      <RiPencilFill />
    </IconButton>
  );
};

AdminUsersPage.getLayout = getAdminLayout;

const ADMIN_NOTES_FIELDS_FRAGMENT = graphql(`
  fragment NotesFields on Note {
    id
    title
    content
    userId
  }
`);

const ADMIN_NOTES_QUERY_DOCUMENT = graphql(`
  query Notes {
    notes {
      ...NotesFields
    }
  }
`);
