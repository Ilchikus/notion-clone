"use client";

import {
    BlockNoteEditor,
    PartialBlock
} from "@blocknote/core";

import {
    BlockNoteViewRaw,
    useCreateBlockNote,
} from "@blocknote/react";

import "@blocknote/core/style.css";

export const Editor = ({

}) => {
    const editor = useCreateBlockNote();
    return <BlockNoteViewRaw editor={editor} />;
}
