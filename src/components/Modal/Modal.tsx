import * as S from "./styles";

import Arrow from "@assets/back-up-down.svg";

export function Modal() {
  return (
    <>
      <S.ModalContainer open={Boolean(false)} className="test">
        <S.HeaderModal>
          <S.TitleModal>Add Note</S.TitleModal>
        </S.HeaderModal>

        <S.MainModal>
          <S.ContainerTitleDescription>
            <S.InputTitle value="Read a book" />
            <S.InputDescription value="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea asanctus est Lorem ipsum dolor" />
          </S.ContainerTitleDescription>

          <S.ContainerCategory>
            <S.ContainerShadowDropdown>
              <S.ContainerDropDown>
                <S.SelectedItem>
                  <h2>Select Category</h2>
                </S.SelectedItem>
                <S.ArrowImage src={Arrow} />
              </S.ContainerDropDown>

              <S.Option className="options">
                <button>Home</button>
                <button>Work</button>
                <button>Personal</button>
              </S.Option>
            </S.ContainerShadowDropdown>

            <S.ContainerActions>
              <button>Cancel</button>
              <button>Add</button>
            </S.ContainerActions>
          </S.ContainerCategory>
        </S.MainModal>
      </S.ModalContainer>
      <S.BackdropContainer />
    </>
  );
}
