import React from "react";
import "./css/createNoteStyle.css";
function CreateNote() {
  return (
    <div className="createNoteDiv center">
      <form>
        <input type="text" placeholder="Title" />
        <textarea
          name=""
          cols=""
          rows="12"
          placeholder="write note..."
        ></textarea>
        <button type="submit" className="button button2">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateNote;
