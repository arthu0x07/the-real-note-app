import { useContext } from "react";
import { ModalContext } from "context/ModalProvider";

export function useModal() {
  return useContext(ModalContext);
}
