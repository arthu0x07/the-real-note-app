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
