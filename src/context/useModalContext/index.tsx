import React, {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

import { Modal } from "../../components/Modal";

export interface IModal {
  isOpend: boolean;
}

interface IModalContextData {
  openModal(): void;
  closeModal(): void;
  toggleModal(): void;
  setContentModal(contentRecive: ReactNode): void;
  statusModal: boolean;
}

interface IModalProvider {
  children: ReactNode;
}

const ModalContext = createContext<IModalContextData>({} as IModalContextData);

const ModalProvider: React.FC<IModalProvider> = ({ children }) => {
  const [status, setStatus] = useState<IModal>({ isOpend: false });
  const [content, setContent] = useState<ReactNode>();

  const openModal = useCallback(() => {
    setStatus({ isOpend: true });
  }, []);

  const closeModal = useCallback(() => {
    setStatus({ isOpend: false });
  }, []);

  const toggleModal = useCallback(() => {
    setStatus({ isOpend: !status.isOpend });
  }, []);

  const setContentModal = useCallback((contentRecive: ReactNode) => {
    setContent(contentRecive);
    openModal();
  }, []);

  const statusModal = status.isOpend;

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        toggleModal,
        statusModal,
        setContentModal,
      }}
    >
      {children}
      <Modal>{content}</Modal>
    </ModalContext.Provider>
  );
};

function useModal(): IModalContextData {
  const context = useContext(ModalContext);

  if (!context) throw new Error("useModal must be used within a ModalProvider");

  return context;
}

export { ModalProvider, useModal };
