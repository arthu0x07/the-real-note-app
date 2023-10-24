import * as S from "./styles";
import { NoteCard } from "components/NoteCard";

export function NotesTaskBoard() {
  return (
    <S.NotesTaskBoardContainer>
      <NoteCard />
      <NoteCard />
      <NoteCard />
    </S.NotesTaskBoardContainer>
  );
}
