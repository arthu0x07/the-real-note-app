import * as S from "./styles";
import PlusImage from "@assets/plus.svg";

export function ButtonAddNote() {
  function handleAddNote() {
    // Create
  }

  return (
    <S.ContainerButtonAddNote onClick={handleAddNote}>
      <S.PlusImage src={PlusImage} alt="Uma imagem de um simbolo de positivo" />
      <S.AddNoteText>Add Note</S.AddNoteText>
    </S.ContainerButtonAddNote>
  );
}
