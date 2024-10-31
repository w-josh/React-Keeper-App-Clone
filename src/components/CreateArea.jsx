import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Zoom from "@mui/material/Zoom";
import { ZoomIn } from "@mui/icons-material";

function CreateArea(props) {
  const [noteContent, setNoteContent] = useState({
    noteTitle: "",
    noteDescription: "",
  });
  const [hidden, setHidden] = useState(true);

  function handleChange(event) {
    const { value, name } = event.target;
    setNoteContent((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function toggleHidden() {
    setHidden(false);
  }

  return (
    <div>
      <form className="create-note">
        {hidden ? null : (
          <Zoom in={true}>
            <input
              name="noteTitle"
              value={noteContent.noteTitle}
              placeholder="Title"
              onChange={handleChange}
            />
          </Zoom>
        )}
        <textarea
          name="noteDescription"
          value={noteContent.noteDescription}
          placeholder="Take a note..."
          rows={hidden ? 1 : 3}
          onChange={handleChange}
          onClick={toggleHidden}
        />
        {hidden ? null : (
          <Zoom in={true}>
            <button
              onClick={(event) => {
                event.preventDefault();
                props.addNote(noteContent);
                setNoteContent({
                  noteTitle: "",
                  noteDescription: "",
                });
              }}
            >
              <AddIcon />
            </button>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
