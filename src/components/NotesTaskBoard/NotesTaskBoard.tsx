import * as S from "./styles";
import { NoteCard } from "components/NoteCard";
import { useNotes } from "@hooks/useNotes";
import { useModal } from "hooks/useModal";

export function NotesTaskBoard() {
  const { notes, deleteNote } = useNotes();
  const { openModal } = useModal();

  return (
    <S.NotesTaskBoardContainer>
      {(() => {
        const renderedNotes = [];

        for (let i = 0; i < notes.length; i++) {
          const { id, category, title, description, isChecked } = notes[i];

          renderedNotes[renderedNotes.length] = (
            <NoteCard
              id={id}
              category={category}
              title={title}
              description={description}
              isChecked={isChecked}
              handleEdit={openModal}
              handleDelete={deleteNote}
            />
          );
        }

        return renderedNotes;
      })()}
    </S.NotesTaskBoardContainer>
  );
}
