import * as S from "./styles";

import EmptyCheckbox from "@assets/empty-checkbox.svg";
import FillCheckbox from "@assets/fill-checkbox.svg";
import Edit from "@assets/edit.svg";
import Trash from "@assets/trash.svg";

export function NoteCard({
  id,
  category,
  title,
  description,
  isChecked,
  handleEdit,
}: NoteCardProps) {
  const allCardData = {
    id,
    category,
    title,
    description,
    isChecked,
  };

  return (
    <S.ContainerCardNotes category={category}>
      <S.HeaderCard>
        <S.ContainerCheckbox>
          <S.ImagesButtons src={isChecked ? FillCheckbox : EmptyCheckbox} />
        </S.ContainerCheckbox>
        <S.TitleCard isChecked={isChecked}>{title}</S.TitleCard>
        <S.ContainerOptions>
          <S.ImagesButtons src={Edit} onClick={() => handleEdit(allCardData)} />
          <S.ImagesButtons src={Trash} />
        </S.ContainerOptions>
      </S.HeaderCard>

      <S.DescriptionCard isChecked={isChecked}>{description}</S.DescriptionCard>
      <S.DateCard isChecked={isChecked}>Jan 21, 2021</S.DateCard>
    </S.ContainerCardNotes>
  );
}

type NoteCardProps = INotes & { handleEdit: (data: INotes) => void };
