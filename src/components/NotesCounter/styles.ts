import styled, { css } from "styled-components";
import theme from "@theme/theme";

export const NotesCounterContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TitleCounter = styled.h2(
  () => css`
    font-size: 1.8rem;
    letter-spacing: 0px;
    font-weight: 500;
    color: ${theme.colors.main_text_color};
  `
);


export const ProgressBarContainer = styled.div`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: start;
  margin-top: 0.8rem;
  overflow: hidden;
  height: 4px;
  position: relative;
`;

export const BackgroundDefaultProgressBar = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.highlight_bg_color};
    opacity: 0.24;
    position: absolute;
    z-index: 1;
  `
);

export const BackgroundPercentProgressBar =
  styled.div<IBackgroundPercentProgressBar>(
    ({ percent = 50 }) => css`
      width: ${percent}%;
      height: 100%;
      background-color: ${theme.colors.highlight_bg_color};
      opacity: 1;
      position: absolute;
      z-index: 2;

      transition: all ease 0.3s;
    `
  );

interface IBackgroundPercentProgressBar {
  percent?: number;
}
