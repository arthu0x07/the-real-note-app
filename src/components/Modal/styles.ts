import styled, { css } from "styled-components";

const InputStyle = css`
  width: 100%;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.modal_bg_input_color};

  border-radius: 4px 4px 0px 0px;
  border: none;

  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.main_text_color};
`;

export const ModalContainer = styled.dialog(
  ({ theme }) => css`
    width: 824px;
    height: 458px;

    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;

    border: none !important;
    box-shadow: 0px 3px 6px ${theme.colors.highlight_shadow_color};
  `
);

export const BackdropContainer = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 3;

    width: 100vw;
    height: 100vh;

    backdrop-filter: blur(50px);
    opacity: 0.4;
    background: ${theme.colors.main_text_color} 0% 0% no-repeat padding-box;
  `
);

export const HeaderModal = styled.div(
  ({ theme }) => css`
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    padding: 1.7rem 3.4rem;

    border-bottom: 1px solid ${theme.colors.highlight_shadow_color};
  `
);

export const TitleModal = styled.h2(
  ({ theme }) => css`
    font-size: 2.4rem;
    letter-spacing: 0px;
    font-weight: 400;
    color: ${theme.colors.main_text_color};
    opacity: 0.8;
  `
);

export const MainModal = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;

  margin-top: 3rem;
  padding: 0 3.4rem;
  gap: 1.6rem;
`;

export const ContainerTitleDescription = styled.div`
  flex-basis: 60%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const InputTitle = styled.input`
  padding: 1.2rem 1.6rem;
  ${InputStyle}
`;

export const InputDescription = styled.textarea.attrs({ spellCheck: false })`
  margin-top: 2.8rem;
  padding: 1.6rem;
  border-radius: 6px;
  min-height: 22.7rem;

  resize: none;
  ${InputStyle}
`;

export const ContainerCategory = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 100%;

  cursor: pointer;
`;

export const ContainerShadowDropdown = styled.div`
  box-shadow: 0px 5px 5px #00000033;
  &:hover .options {
    display: flex;
  }
`;

export const ContainerDropDown = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 16px;
`;

export const SelectedItem = styled.div(
  ({ theme }) => css`
    margin-right: 10.5rem;

    h2 {
      font-size: 1.4rem;
      letter-spacing: 0px;
      font-weight: 400;
      color: ${theme.colors.main_text_color};
    }
  `
);

export const ArrowImage = styled.img`
  width: 10px;
  height: 5px;
`;

export const Option = styled.div(
  () => css`
    display: none;
    justify-content: flex-start;
    align-content: start;
    flex-direction: column;
    width: 100%;
  `
);

export const CategoryButton = styled.button<{ isActive: boolean }>(
  ({ isActive, theme }) => css`
    padding: 0.6rem 1.6rem;
    border: none;
    text-align: left;
    font-size: 1.4rem;
    letter-spacing: 0px;
    font-weight: 400;
    color: ${theme.colors.main_text_color};

    transition: background-color 0.5s ease-out;
    text-decoration: none;
    background-color: transparent;

    background-color: ${isActive &&
    theme.colors.modal_bg_input_highlight_color};

    &:hover {
      background-color: ${theme.colors.modal_bg_input_highlight_color};
    }

    &:last-child {
      margin-bottom: 10px;
    }
  `
);

export const ContainerActions = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2.4rem;

    align-self: flex-end;

    position: absolute;
    bottom: 2.5rem;

    > button {
      border: none;
      font-size: 1.4rem;
      font-family: "Roboto";
      font-weight: 500;
      letter-spacing: 1px;
      color: ${theme.colors.actions_text_color};
      text-transform: uppercase;
      background-color: transparent;
      padding: 0.6rem 1.6rem;
      transition: background-color 0.5s ease-out;

      &:hover {
        background-color: ${theme.colors.modal_bg_input_highlight_color};
      }
    }
  `
);
