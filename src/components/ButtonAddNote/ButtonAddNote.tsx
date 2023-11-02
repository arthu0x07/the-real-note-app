import * as S from "./styles";
import PlusImage from "@assets/plus.svg";
import { useNotes } from "hooks/useNotes";
import { useModal } from "hooks/useModal";

export function ButtonAddNote() {
  const { openModal } = useModal();
  const { createNoteTemplate } = useNotes();

  function handleAddNote() {
    const newNote = createNoteTemplate();
    openModal(newNote, true);
  }

  return (
    <S.ContainerButtonAddNote onClick={handleAddNote}>
      <S.PlusImage src={PlusImage} alt="Uma imagem de um simbolo de positivo" />
      <S.AddNoteText>Add Note</S.AddNoteText>
    </S.ContainerButtonAddNote>
  );
}
