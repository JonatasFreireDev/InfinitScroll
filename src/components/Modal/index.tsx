import React, { ReactNode, useCallback } from "react";

import { useModal } from "../../context";

interface IModalProps {
  className?: string;
  children: ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ className, children }) => {
  const { closeModal, statusModal } = useModal();

  const closeModalFunc = useCallback(() => {
    closeModal();
  }, []);

  if (statusModal) {
    return (
      <div
        onClick={closeModalFunc}
        className="fixed flex justify-center items-center bg-black bg-opacity-60 top-0 h-screen w-screen animate-appearFromNothing"
      >
        <section
          className={`absolute bg-white rounded-[10px] min-h-[200px] w-[50%] sm:w-[90%] max-w-3xl animate-appearFromTop !opacity-100 ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </section>
      </div>
    );
  }

  return null;
};
