import * as S from "./styles";
import { NotesCounter } from "@components/NotesCounter";
import { NotesTaskBoard } from "@components/NotesTaskBoard";

export function NotesPanel() {
  return (
    <S.NotesPanelContainer>
      <NotesCounter />
      <NotesTaskBoard />
    </S.NotesPanelContainer>
  );
}
