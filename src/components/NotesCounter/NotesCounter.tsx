import { useEffect, useState } from "react";
import * as S from "./styles";
import { useNotes } from "@hooks/useNotes";

export function NotesCounter() {
  const [checkedCardsCount, setCheckedCardsCount] = useState<number>();
  const { notes } = useNotes();

  useEffect(() => {
    let countCardsChecked = 0;

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].isChecked) {
        countCardsChecked++;
      }
    }

    setCheckedCardsCount(countCardsChecked);
  }, [notes]);

  const progressNotes: string = `${checkedCardsCount}/${notes.length}`;

  return (
    <S.NotesCounterContainer>
      <S.TitleCounter>{`You have ${progressNotes} notes completed`}</S.TitleCounter>

      <S.ProgressBarContainer>
        <S.BackgroundDefaultProgressBar />
        <S.BackgroundPercentProgressBar
          percent={(Number(checkedCardsCount) / notes.length) * 100}
        />
      </S.ProgressBarContainer>
    </S.NotesCounterContainer>
  );
}
