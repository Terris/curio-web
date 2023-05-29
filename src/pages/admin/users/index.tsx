import { getAdminLayout } from "@/layout/AdminLayout";
import { EasyTable, Text, IconButton } from "@/ui";
import { useQuery } from "@apollo/client";
import { graphql } from "@/types/gql";
import { UsersQuery, UserFieldsFragment, Maybe } from "@/types/graphql";
import { RiPencilFill } from "react-icons/ri";
export default function AdminUsersPage() {
  const { data, loading, error } = useQuery(ADMIN_USERS_QUERY_DOCUMENT);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return (
    <>
      <Text as="h2" size={4}>
        Users
      </Text>
      <UsersView users={data?.users} />
    </>
  );
}

interface UsersViewProps {
  users: UsersQuery["users"];
  loading?: boolean;
}

const UsersView = ({ users, loading }: UsersViewProps) => {
  if (loading) return <p>Loading...</p>;
  if (!users) return <p>No users</p>;
  return (
    <EasyTable
      data={users}
      renderActions={({ rowData }) => <Actions data={rowData} />}
      skipItems={["__typename"]}
    />
  );
};

const Actions = ({ data }: { data?: Maybe<Partial<UserFieldsFragment>> }) => {
  if (!data?.id) return null;
  return (
    <IconButton onClick={() => console.log(data)}>
      <RiPencilFill />
    </IconButton>
  );
};

AdminUsersPage.getLayout = getAdminLayout;

const ADMIN_USER_FIELDS_FRAGMENT = graphql(`
  fragment UserFields on User {
    id
    email
    isAdmin
  }
`);

const ADMIN_USERS_QUERY_DOCUMENT = graphql(`
  query Users {
    users {
      ...UserFields
    }
  }
`);
