"use client";
import { useMemo, useState } from "react";
import EditorPrimitive from "@draft-js-plugins/editor";
import createInlineToolbarPlugin from "@draft-js-plugins/inline-toolbar";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { styled } from "../stitches.config";

// Trick to fix issue with NextJS
// https://github.com/facebook/draft-js/blob/master/examples/draft-0-10-0/universal/editor.js
const emptyContentState = convertFromRaw({
  entityMap: {},
  blocks: [
    {
      text: "",
      key: "foo",
      type: "unstyled",
      entityRanges: [],
      depth: 0,
      inlineStyleRanges: [],
    },
  ],
});

interface EditorProps {
  placeholder?: string;
  onChange?: Function;
  value?: string;
}

export const Editor = ({
  placeholder = "Start writing...",
  onChange,
  value,
}: EditorProps) => {
  const [plugins, InlineToolbar] = useMemo(() => {
    const inlineToolbarPlugin = createInlineToolbarPlugin();
    return [[inlineToolbarPlugin], inlineToolbarPlugin.InlineToolbar];
  }, []);

  const [editorState, setEditorState] = useState(() =>
    EditorState.createWithContent(emptyContentState)
  );

  const contentState = editorState.getCurrentContent();

  console.log(JSON.stringify(convertToRaw(contentState)));

  return (
    <>
      <StyledEditor
        editorState={editorState}
        onChange={(editorState) => {
          setEditorState(editorState);
          if (onChange) {
            onChange(editorState.getCurrentContent().getPlainText());
          }
        }}
        placeholder={placeholder}
        plugins={plugins}
      />
      <InlineToolbar />
    </>
  );
};

const StyledEditor = styled(EditorPrimitive, {
  color: "green",
  ".public-DraftEditorPlaceholder-root": {
    color: "red",
  },
});
