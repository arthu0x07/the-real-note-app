import styled, { css } from "styled-components";

export const ContainerInput = styled.section(
  ({ theme }) => css`
    width: 100%;
    max-width: 824px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    background-color: ${theme.colors.secondary_bg_color};
    box-shadow: 0px 3px 6px ${theme.colors.highlight_shadow_color};
  `
);

export const SearchImage = styled.img`
  position: absolute;
  left: 19px;
  z-index: 1;
  width: 18px;
  height: 18px;
  margin-bottom: 4px;
`;

export const PlaceHolder = styled.label(
  ({ theme }) => css`
    position: absolute;
    left: 52px;
    z-index: 1;
    font-size: 18px;
    opacity: 0.6;
    color: ${theme.colors.main_text_color};
  `
);

export const Input = styled.input.attrs({
  type: "text",
})`
  width: 100%;
  padding: 11px 19px;
  flex: 1;
  border: none;
  position: relative;
  z-index: 2;
  background-color: transparent;
`;
