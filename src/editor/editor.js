import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import { projectFirestore } from "../firebase/config";
import useDebounce from "../helper";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const Editor = ({ classes, note }) => {
  const [editorNoteTitle, setEditorNoteTitle] = useState(
    note.selectedNote.title
  );
  const [editorNoteBody, setEditorNoteBody] = useState(note.selectedNote.body);
  const updateBodyDebounce = useDebounce(editorNoteBody, 1500);
  const updateTitleDebounce = useDebounce(editorNoteTitle, 1500);

  useEffect(() => {
    setEditorNoteTitle(note.selectedNote.title);
  }, [note.selectedNote]);

  useEffect(() => {
    setEditorNoteBody(note.selectedNote.body);
  }, [note.selectedNote]);

  useEffect(() => {
    if (updateBodyDebounce) {
      projectFirestore
        .collection(`notes`)
        .doc(note.selectedNote.id)
        .update({
          body: editorNoteBody,
        });
    }
  }, [updateBodyDebounce]);

  useEffect(() => {
    projectFirestore
      .collection(`notes`)
      .doc(note.selectedNote.id)
      .update({
        title: editorNoteTitle,
      });
  }, [updateTitleDebounce]);

  const updateNote = (text) => {
    setEditorNoteBody(text);
  };
  const updateTitle = (e) => {
    setEditorNoteTitle(e.target.value);
  };

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike"],
      [
        {
          color: [
            "#000000",
            "#111d5e",
            "#00917c",
            "#c70039",
            "#295939",
            "#a20a0a",
            "#81b214",
            "#1b1c25",
            "#944e6c",
            "#aa2b1d",
            "#e48900",
            "#ff8303",
            "#630000"
          ],
        },
      ],
      [
        { list: "ordered" },
        { list: "bullet" },

      ],
      ["link"],
      ["image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "color",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
  ];

  return (
    <div id="editorContainer" className={classes.editorContainer}>
      <div className={classes.editorHeader}>
        <BorderColorIcon className={classes.editIcon} />

        <input
          className={classes.titleInput}
          type="text"
          value={editorNoteTitle}
          placeholder="Note title..."
          onChange={updateTitle}
        />

      </div>
      <ReactQuill
        id="quill"
        onChange={updateNote}
        value={editorNoteBody}
        modules={modules}
        formats={formats}
      ></ReactQuill>
    </div>
  );
};

export default withStyles(styles)(Editor);
