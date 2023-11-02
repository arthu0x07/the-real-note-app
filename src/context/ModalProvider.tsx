import { createContext, useState } from "react";

export const ModalContext = createContext({} as IContextProviderValue);

export const ModalProvider = ({ children }: IContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<INotes>({} as INotes);
  const [isNoteCreation, setIsNoteCreation] = useState(false);

  function openModal(data: INotes, isNoteCreation: boolean | undefined) {
    if (data) {
      setModalData(data);
    }

    setIsNoteCreation(Boolean(isNoteCreation));
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setModalData({} as INotes);
  }

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        isNoteCreation,
        modalData,
        setModalData,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

interface IContextProviderValue {
  isOpen: boolean;
  isNoteCreation: boolean;
  modalData: INotes;
  setModalData: React.Dispatch<React.SetStateAction<INotes>>;
  openModal: (data: INotes, isNoteCreation?: boolean) => void;
  closeModal: () => void;
}

interface IContextProviderProps {
  children: string | JSX.Element | JSX.Element[];
}
