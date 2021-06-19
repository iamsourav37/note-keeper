import React from "react";

import "./css/noteStyle.css";

function Note({ noteList, removeNote }) {
  return noteList.map((note) => {
    return (
      <div className="box" key={note.id}>
        <div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
        <button
          className="del-btn"
          onClick={() => {
            removeNote(note.id);
          }}
        >
          Delete
        </button>
      </div>
    );
  });
}

export default Note;
