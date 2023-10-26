import { createContext, useState } from "react";
import { mockNotes } from "@mocks/notes";

export const NotesContext = createContext({} as INotesProviderValue);

export function NotesProvider({ children }: INotesProviderProps) {
  const [notes, setNotes] = useState<INotes[]>(mockNotes);

  const providerValue = {
    notes: notes,
    createNewNote: createNewNote,
    editNote: editNote,
  };

  function createNewNote({ category, title, description }: INotes) {
    setNotes([
      ...notes,
      {
        id: String(notes.length),
        category: category,
        title: title,
        description: description,
        createdAt: new Date(),
        isChecked: false,
      },
    ]);
  }

  function editNote(id: string, updatedNote: INotes) {
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

  return (
    <NotesContext.Provider value={providerValue}>
      {children}
    </NotesContext.Provider>
  );
}

interface INotesProviderValue {
  notes: INotes[];
  createNewNote({ id, category, title, description }: INotes): void;
  editNote: (id: string, updatedNote: INotes) => void;
}

interface INotesProviderProps {
  children: string | JSX.Element | JSX.Element[];
}
