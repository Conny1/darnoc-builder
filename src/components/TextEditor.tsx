import "../app/styles.scss";
import { Content, EditorContent, useEditor } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import React, { useEffect } from "react";

type Props = {
  element: Content;
};
const TextEditor = ({ element }: Props) => {
  const editor = useEditor({
    extensions: [StarterKit],
    immediatelyRender: false,
    content: element,
  });

  const [showMenu] = React.useState(true);

  useEffect(() => {
    if (editor) {
      editor.setEditable(true);
    }
  }, [editor]);

  return (
    <>
      {editor && showMenu && (
        <BubbleMenu
          editor={editor}
          shouldShow={() => showMenu}
          options={{ placement: "bottom", offset: 8 }}
        >
          <div className="flex p-1 bg-white  space-x-1">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`px-2 py-1 rounded transition ${
                editor.isActive("bold")
                  ? "bg-purple-600 text-white hover:bg-purple-500"
                  : "hover:bg-gray-200"
              }`}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`px-2 py-1 rounded transition ${
                editor.isActive("italic")
                  ? "bg-purple-600 text-white hover:bg-purple-500"
                  : "hover:bg-gray-200"
              }`}
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`px-2 py-1 rounded transition ${
                editor.isActive("strike")
                  ? "bg-purple-600 text-white hover:bg-purple-500"
                  : "hover:bg-gray-200"
              }`}
            >
              Strike
            </button>
          </div>
        </BubbleMenu>
      )}
      <EditorContent
        editor={editor}
        className="w-full h-full break-words whitespace-pre-wrap   outline-none"
      />
    </>
  );
};

export default TextEditor;
