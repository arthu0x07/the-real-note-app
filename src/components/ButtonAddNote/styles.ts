import styled, { css } from "styled-components";
import { mediaQueries } from "styles/mediaQueries";

export const ContainerButtonAddNote = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.2rem;
    padding: 0.8rem 1.6rem;
    background-color: ${theme.colors?.highlight_bg_color};
    border-radius: 4px;
    cursor: pointer;

    @media ${mediaQueries.medium} {
      flex-grow: 1;
    }
  `
);

export const PlusImage = styled.img`
  width: 14px;
  height: 14px;
`;

export const AddNoteText = styled.h2(
  ({ theme }) => css`
    font-size: 1.4rem;
    font-weight: 500;
    color: ${theme.colors?.secondary_text_color};
    text-transform: uppercase;
    letter-spacing: 1.25px;
  `
);
