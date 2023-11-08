import styled, { css } from "styled-components";
import theme from "@theme/theme";
import CategoryColorEnum from "types/CategoryColors";

export const ContainerCardNotes = styled.div<IContainerCardNotes>(
  ({ category }) => css`
    flex-basis: 49%;
    flex-shrink: 1;
    flex-grow: 1;
    max-width: 49%;
    padding: 2rem 1.6rem;
    border-radius: 0.4rem;
    background-color: ${CategoryColorEnum[category]};
  `
);

export const HeaderCard = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`;

export const ContainerCheckbox = styled.div`
  margin-right: 22px;
`;

export const ImagesButtons = styled.img`
  cursor: pointer;
  width: 1.8rem;
  height: 1.8rem;
`;

export const TitleCard = styled.h2<{ isChecked?: boolean }>(
  ({ isChecked = false }) => css`
    font-weight: 500;
    color: ${theme.colors?.secondary_text_color};
    font-size: 2rem;
    letter-spacing: 0px;
    text-decoration: ${isChecked ? "line-through" : "none"};
    opacity: ${isChecked ? 0.8 : 1};
  `
);

export const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  position: absolute;
  right: 0;
`;

export const DescriptionCard = styled.p<{ isChecked?: boolean }>(
  ({ isChecked = false }) => css`
    width: 100%;
    font-weight: 400;
    color: ${theme.colors?.secondary_text_color};
    font-size: 1.4rem;
    letter-spacing: 0px;
    margin-top: 0.8rem;

    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    text-decoration: ${isChecked ? "line-through" : "none"};
    opacity: ${isChecked ? 0.8 : 1};
  `
);

export const DateCard = styled.p<{ isChecked?: boolean }>(
  ({ isChecked = false }) => css`
    font-weight: 400;
    color: ${theme.colors?.secondary_text_color};
    font-size: 1.5rem;
    letter-spacing: 0px;
    margin-top: 1.2rem;
    text-overflow: ellipsis;
    text-decoration: ${isChecked ? "line-through" : "none"};
    opacity: ${isChecked ? 0.8 : 1};
  `
);

interface IContainerCardNotes {
  category: string;
}
