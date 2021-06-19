import React, { useState } from "react";
import { nanoid } from "nanoid";
import "./css/createNoteStyle.css";

const CreateNote = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (!title || !content) {
      console.log("please fill the form ");
      return alert("Plese fill the form");
    }

    const note = {
      id: nanoid(),
      title: title,
      content: content,
    };
    setTitle("");
    setContent("");
    addNote(note);
  };
  return (
    <div className="createNoteDiv center">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          name=""
          cols=""
          rows="12"
          placeholder="write note..."
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
        <button type="submit" className="button button2">
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
