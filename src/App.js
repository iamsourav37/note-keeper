import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const allNotes = JSON.parse(localStorage.getItem("notes"));
    setNotes(allNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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
