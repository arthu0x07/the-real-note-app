import * as S from "./styles";
import { NotesCounter } from "@components/NotesCounter";

export function NotesPanel() {
  return (
    <S.NotesPanelContainer>
      <NotesCounter />
    </S.NotesPanelContainer>
  );
}
