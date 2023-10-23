import * as S from "./styles";

export function NotesProgressBar() {
  return (
    <S.ProgressBarContainer>
      <S.BackgroundDefaultProgressBar />
      <S.BackgroundPercentProgressBar />
    </S.ProgressBarContainer>
  );
}
