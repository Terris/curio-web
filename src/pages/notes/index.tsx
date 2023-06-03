import { getAppLayout } from "@/layout/AppLayout";
import { Text, Editor, styled } from "@/ui";

export default function NotesPage() {
  return (
    <>
      <Text size={4} as="h2">
        Notes
      </Text>
      <NotesWrapper>
        <Editor />
      </NotesWrapper>
    </>
  );
}

NotesPage.getLayout = getAppLayout;

const NotesWrapper = styled("div", {
  padding: "2rem 0",
});
