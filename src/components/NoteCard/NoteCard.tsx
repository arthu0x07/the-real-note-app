import * as S from "./styles";

import EmptyCheckbox from "@assets/empty-checkbox.svg";
import FillCheckbox from "@assets/fill-checkbox.svg";
import Edit from "@assets/edit.svg";
import Trash from "@assets/trash.svg";

export function NoteCard({ isChecked = false }: INoteCard) {
  return (
    <S.ContainerCardNotes title="Personal">
      <S.HeaderCard>
        <S.ContainerCheckbox>
          <S.ImagesButtons src={isChecked ? FillCheckbox : EmptyCheckbox} />
        </S.ContainerCheckbox>
        <S.TitleCard isChecked={isChecked}> Meeting with Jane</S.TitleCard>
        <S.ContainerOptions>
          <S.ImagesButtons src={Edit} />
          <S.ImagesButtons src={Trash} />
        </S.ContainerOptions>
      </S.HeaderCard>

      <S.DescriptionCard isChecked={isChecked}>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clit At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clit tua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clit At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clit
      </S.DescriptionCard>
      <S.DateCard isChecked={isChecked}>Jan 21, 2021</S.DateCard>
    </S.ContainerCardNotes>
  );
}

interface INoteCard {
  isChecked?: boolean;
}
