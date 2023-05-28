import { getAdminLayout } from "@/layout/AdminLayout";
import { Text } from "@/ui";
import { styled } from "@stitches/react";

export default function AdminPage() {
  return (
    <DocumentWrapper>
      <Text as="h2" size={4}>
        Admin Domain Definitions
      </Text>
      <DefinitionRow>
        <DefinitionTerm>Admin</DefinitionTerm>
        <DefinitionDescription>
          Role attribute on a user that indicates the user can view/edit all
          database records. For internal use only.
        </DefinitionDescription>
      </DefinitionRow>
      <DefinitionRow>
        <DefinitionTerm>Role</DefinitionTerm>
        <DefinitionDescription>
          Attributes on a user that indicate a role, e.g. admin, editor, etc.
        </DefinitionDescription>
      </DefinitionRow>
      <DefinitionRow>
        <DefinitionTerm>Users</DefinitionTerm>
        <DefinitionDescription>
          Users of the application that have signed up.
        </DefinitionDescription>
      </DefinitionRow>
    </DocumentWrapper>
  );
}

AdminPage.getLayout = getAdminLayout;

const DocumentWrapper = styled("div", {
  maxWidth: "800px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  background: "$gray1",
  borderRadius: "0.5rem",
  padding: "2rem 3rem 6rem 3rem",
  marginTop: "2rem",
});

const DefinitionRow = styled("div", {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "top",
});

const DefinitionTerm = styled(Text, { fontWeight: "bold", width: "100px" });
const DefinitionDescription = styled(Text, { flex: 1 });
