import { useContext } from "react";
import { NotesContext } from "@context/NotesProvider";

export function useNotes() {
  return useContext(NotesContext);
}
