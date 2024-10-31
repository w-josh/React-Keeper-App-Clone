import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {
  const [noteBox, setNoteBox] = useState([]);

  function insertNote(noteContent) {
    console.log(noteContent);
    setNoteBox((prevItems) => {
      return [...prevItems, noteContent];
    });
  }

  function deleteNote(id) {
    setNoteBox((prevItems) => {
      return prevItems.filter((currentArray, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={insertNote} />
      {noteBox.map((note, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={note.noteTitle}
            content={note.noteDescription}
            noteDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
