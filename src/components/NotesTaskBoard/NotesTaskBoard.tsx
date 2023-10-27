import * as S from "./styles";
import { NoteCard } from "components/NoteCard";
import { useNotes } from "@hooks/useNotes";

export function NotesTaskBoard() {
  const { notes } = useNotes();

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
            />
          );
        }

        return renderedNotes;
      })()}
    </S.NotesTaskBoardContainer>
  );
}
