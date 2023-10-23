import styled, { css } from "styled-components";
import theme from "@theme/theme";
import CategoryColorEnum from "types/CategoryColors";

export const ContainerNotesCategory = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

export const ContainerButtonCategory = styled.div<IContainerButtonCategory>(
  ({ isActive, title }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0.9rem 2.3rem;
    border-radius: 0.6rem;
    width: 8.9rem;
    height: 3.6rem;
    background-color: ${isActive && CategoryColorEnum[title]};
    position: relative;
  `
);

export const TitleCategory = styled.h2<ITitleCategory>(
  ({ isActive }) => css`
    font-weight: normal;
    letter-spacing: 0;
    color: ${isActive
      ? theme.colors.secondary_text_color
      : theme.colors.main_text_color};
    opacity: 1;
  `
);

export const Sphere = styled.div<ISphere>(
  ({ title }) => css`
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    background-color: ${CategoryColorEnum[title]};

    position: absolute;
    bottom: 1px;
  `
);

// Interfaces
interface IContainerButtonCategory {
  title: string;
  isActive: boolean;
}

interface ITitleCategory {
  isActive: boolean;
}

interface ISphere {
  title: string;
}
