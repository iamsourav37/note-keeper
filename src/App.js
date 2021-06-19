import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    console.log("addNote method invoked with new obj : ", newNote);
    setNotes([...notes, newNote]);
  };

  const removeNote = (noteId) => {
    console.log("removeNote method invoked with obj id : ", noteId);
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  };
  return (
    <div className="App">
      <Header />
      <CreateNote addNote={addNote} />
      <Note noteList={notes} removeNote={removeNote} />
    </div>
  );
}

export default App;
