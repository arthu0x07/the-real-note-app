import { createContext, useState } from "react";

export const ModalContext = createContext({} as IContextProviderValue);

export const ModalProvider = ({ children }: IContextProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<INotes>({} as INotes);


  function openModal(data: INotes) {
    setModalData(data);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setModalData({} as INotes);
  }

  return (
    <ModalContext.Provider
      value={{ isOpen, modalData, setModalData, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

interface IContextProviderValue {
  isOpen: boolean;
  modalData: INotes;
  setModalData: React.Dispatch<React.SetStateAction<INotes>>;
  openModal: (data: INotes) => void;
  closeModal: () => void;
}

interface IContextProviderProps {
  children: string | JSX.Element | JSX.Element[];
}