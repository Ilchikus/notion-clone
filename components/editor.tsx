"use client";

// TODO: fix saving content to db

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote, useEditorChange } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";

import "@blocknote/core/style.css";
import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { useTheme } from "next-themes";

import { useEdgeStore } from "@/lib/edgestore";

interface EditorProps {
    onChange: (value: string) => void;
    initialContent?: string;
    editable?: boolean;
}

const Editor = ({
    onChange,
    initialContent,
    editable
}:EditorProps) => {
    const { resolvedTheme } = useTheme();
    const { edgestore } = useEdgeStore();

    const handleUpload = async (file: File) => {
        const response = await edgestore.publicFiles.upload({
            file
        })

        return response.url;
    }



    const editor: BlockNoteEditor = useCreateBlockNote({
        // editable,
        initialContent: initialContent ? JSON.parse(initialContent) as PartialBlock[] : undefined,
        // useEditorChange: (editor) => {
        //     onChange(JSON.stringify(editor.topLevelBlocks, null, 2))
        // },
        uploadFile: handleUpload
    });
    return (
        <div>
        <BlockNoteView
            editor={editor}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
        />
    </div>
    )


}

export default Editor;
