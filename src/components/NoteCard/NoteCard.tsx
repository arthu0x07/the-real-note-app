import * as S from "./styles";

import EmptyCheckbox from "@assets/empty-checkbox.svg";
import FillCheckbox from "@assets/fill-checkbox.svg";
import Edit from "@assets/edit.svg";
import Trash from "@assets/trash.svg";
import { DateToMaskDate } from "@utils/data";

export function NoteCard({
  id,
  category,
  title,
  description,
  isChecked,
  createdAt,
  handleEdit,
  handleDelete,
  handleToggleCheckbox,
}: NoteCardProps) {
  const allCardData = {
    id,
    category,
    title,
    description,
    isChecked,
  };

  const formatedDate = DateToMaskDate(createdAt);

  return (
    <S.ContainerCardNotes category={category}>
      <S.HeaderCard>
        <S.ContainerCheckbox
          onClick={() =>
            handleToggleCheckbox(id, { ...allCardData, isChecked: !isChecked })
          }
        >
          <S.ImagesButtons src={isChecked ? FillCheckbox : EmptyCheckbox} />
        </S.ContainerCheckbox>
        <S.TitleCard isChecked={isChecked}>{title}</S.TitleCard>
        <S.ContainerOptions>
          <S.ImagesButtons src={Edit} onClick={() => handleEdit(allCardData)} />
          <S.ImagesButtons src={Trash} onClick={() => handleDelete(id)} />
        </S.ContainerOptions>
      </S.HeaderCard>

      <S.DescriptionCard isChecked={isChecked}>{description}</S.DescriptionCard>
      <S.DateCard isChecked={isChecked}>{formatedDate}</S.DateCard>
    </S.ContainerCardNotes>
  );
}

type NoteCardProps = INotes & {
  handleEdit: (data: INotes, isNoteCreation?: boolean) => void;
  handleDelete: (id: INotes["id"]) => void;
  handleToggleCheckbox: (id: INotes["id"], updatedNote: INotes) => void;
};
