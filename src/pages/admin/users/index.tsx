import { getAdminLayout } from "@/layout/AdminLayout";
import { EasyTable, Text } from "@/ui";
import { useQuery } from "@apollo/client";
import { graphql } from "@/types";
import { UsersQuery } from "@/types/graphql";

export default function AdminUsersPage() {
  const { data, loading, error } = useQuery(usersQueryDocument);
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
  return <EasyTable data={users} skipItems={["__typename"]} />;
};

AdminUsersPage.getLayout = getAdminLayout;

const usersQueryDocument = graphql(`
  query Users {
    users {
      id
      email
      isAdmin
    }
  }
`);
