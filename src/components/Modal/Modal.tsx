import { useModal } from "@hooks/useModal";
import { useNotes } from "@hooks/useNotes";

import * as S from "./styles";

import Arrow from "@assets/back-up-down.svg";

export function Modal() {
  const { isOpen, modalData, closeModal, setModalData } = useModal();
  const { editNote } = useNotes();

  function handleCloseModal() {
    closeModal();
  }

  function handleChangeModalData(target: any, field: keyof INotes) {
    let value;

    field === "category"
      ? (value = target?.innerText)
      : (value = target?.value);

    setModalData({ ...modalData, [field]: value });
  }

  function handleSaveNote() {
    editNote(modalData.id, modalData);
    closeModal();
  }

  return (
    <>
      <S.ModalContainer open={isOpen}>
        <S.HeaderModal>
          <S.TitleModal>Add Note</S.TitleModal>
        </S.HeaderModal>

        <S.MainModal>
          <S.ContainerTitleDescription>
            <S.InputTitle
              value={modalData?.title}
              onChange={({ target }) => handleChangeModalData(target, "title")}
            />
            <S.InputDescription
              value={modalData?.description}
              onChange={({ target }) =>
                handleChangeModalData(target, "description")
              }
            />
          </S.ContainerTitleDescription>

          <S.ContainerCategory>
            <S.ContainerShadowDropdown>
              <S.ContainerDropDown>
                <S.SelectedItem>
                  <h2>{modalData.category}</h2>
                </S.SelectedItem>
                <S.ArrowImage src={Arrow} />
              </S.ContainerDropDown>

              <S.Option className="options">
                <S.CategoryButton
                  isActive={modalData.category === "Home"}
                  onClick={({ target }) =>
                    handleChangeModalData(target, "category")
                  }
                >
                  Home
                </S.CategoryButton>
                <S.CategoryButton
                  isActive={modalData.category === "Work"}
                  onClick={({ target }) =>
                    handleChangeModalData(target, "category")
                  }
                >
                  Work
                </S.CategoryButton>
                <S.CategoryButton
                  isActive={modalData.category === "Personal"}
                  onClick={({ target }) =>
                    handleChangeModalData(target, "category")
                  }
                >
                  Personal
                </S.CategoryButton>
              </S.Option>
            </S.ContainerShadowDropdown>

            <S.ContainerActions>
              <button onClick={handleCloseModal}>Cancel</button>
              <button onClick={handleSaveNote}>Add</button>
            </S.ContainerActions>
          </S.ContainerCategory>
        </S.MainModal>
      </S.ModalContainer>

      {isOpen && <S.BackdropContainer />}
    </>
  );
}
