import { createContext, useEffect, useState } from "react";

export const NotesContext = createContext({} as INotesProviderValue);

export function NotesProvider({ children }: INotesProviderProps) {
  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes != null || storedNotes != undefined) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  const [notes, setNotes] = useState<INotes[]>([] as INotes[]);

  const providerValue = {
    notes: notes,
    createNoteTemplate: createNoteTemplate,
    createNewNote: createNewNote,
    editNote: editNote,
    deleteNote: deleteNote,
  };

  function createNoteTemplate() {
    return {
      id: new Date().getTime(),
      category: "Home",
      title: "",
      description: "",
      createdAt: new Date(),
      isChecked: false,
    };
  }

  function createNewNote(data: INotes) {
    setNotes([...notes, data]);
  }

  function editNote(id: INotes["id"], updatedNote: INotes) {
    let noteToEdit = null;

    for (const note of notes) {
      if (note.id === id) {
        noteToEdit = note;
        break;
      }
    }

    if (noteToEdit) {
      const updatedNoteCopy = {
        ...noteToEdit,
        ...updatedNote,
      };

      let noteIndex = -1;
      for (let i = 0; i < notes.length; i++) {
        if (notes[i] === noteToEdit) {
          noteIndex = i;
          break;
        }
      }

      const updatedNotes = [...notes];
      updatedNotes[noteIndex] = updatedNoteCopy;

      setNotes(updatedNotes);
    }
  }

  function deleteNote(id: INotes["id"]) {
    const newArrayOfNotes = [] as INotes[];
    let newIndex = 0;

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id !== id) {
        newArrayOfNotes[newIndex] = notes[i];
        newIndex++;
      }
    }

    setNotes(newArrayOfNotes);
  }

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    } else {
      localStorage.removeItem("notes");
    }
  }, [notes]);

  return (
    <NotesContext.Provider value={providerValue}>
      {children}
    </NotesContext.Provider>
  );
}

interface INotesProviderValue {
  notes: INotes[];
  createNoteTemplate: () => INotes;
  createNewNote({ id, category, title, description }: INotes): void;
  editNote: (id: INotes["id"], updatedNote: INotes) => void;
  deleteNote: (id: INotes["id"]) => void;
}

interface INotesProviderProps {
  children: string | JSX.Element | JSX.Element[];
}
