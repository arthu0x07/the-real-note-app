import { createContext, useState } from "react";
import { mockNotes } from "@mocks/notes";

export const NotesContext = createContext({} as INotesProviderValue);

export function NotesProvider({ children }: INotesProviderProps) {
  const [notes, setNotes] = useState<INotes[]>(mockNotes);

  const providerValue = {
    notes: notes,
    createNewNote: createNewNote,
    editNote: editNote,
    deleteNote: deleteNote,
  };

  function createNewNote({ category, title, description }: INotes) {
    setNotes([
      ...notes,
      {
        id: notes.length,
        category: category,
        title: title,
        description: description,
        createdAt: new Date(),
        isChecked: false,
      },
    ]);
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

      console.table({
        index: i,
        state: notes[i],
        newState: newArrayOfNotes[i],
      });
    }

    setNotes(newArrayOfNotes);
  }

  return (
    <NotesContext.Provider value={providerValue}>
      {children}
    </NotesContext.Provider>
  );
}

interface INotesProviderValue {
  notes: INotes[];
  createNewNote({ id, category, title, description }: INotes): void;
  editNote: (id: INotes["id"], updatedNote: INotes) => void;
  deleteNote: (id: INotes["id"]) => void;
}

interface INotesProviderProps {
  children: string | JSX.Element | JSX.Element[];
}
