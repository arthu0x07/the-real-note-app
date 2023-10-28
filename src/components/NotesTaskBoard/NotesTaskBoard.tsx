import * as S from "./styles";
import { NoteCard } from "components/NoteCard";
import { useNotes } from "@hooks/useNotes";
import { useModal } from "hooks/useModal";

export function NotesTaskBoard() {
  const { notes, deleteNote, editNote } = useNotes();
  const { openModal } = useModal();

  return (
    <S.NotesTaskBoardContainer>
      {(() => {
        const renderedNotes = [];

        for (let i = 0; i < notes.length; i++) {
          const { id, category, title, description, isChecked, createdAt } = notes[i];

          renderedNotes[renderedNotes.length] = (
            <NoteCard
              id={id}
              category={category}
              title={title}
              description={description}
              isChecked={isChecked}
              createdAt={createdAt}
              handleEdit={openModal}
              handleDelete={deleteNote}
              handleToggleCheckbox={editNote}
            />
          );
        }

        return renderedNotes;
      })()}
    </S.NotesTaskBoardContainer>
  );
}
