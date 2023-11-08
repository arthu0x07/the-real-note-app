import * as S from "./styles";
import { NoteCard } from "components/NoteCard";

import { useNotes } from "@hooks/useNotes";
import { useModal } from "@hooks/useModal";
import { useFilter } from "@hooks/useFilter";

export function NotesTaskBoard() {
  const { openModal } = useModal();
  const { deleteNote, editNote } = useNotes();
  const { filteredNotes } = useFilter();

  return (
    <S.NotesTaskBoardContainer>
      {(() => {
        const renderedNotes = [];

        for (let i = 0; i < filteredNotes?.length; i++) {
          const { id, category, title, description, isChecked, createdAt } =
            filteredNotes[i];

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
