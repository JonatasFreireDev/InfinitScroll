import React, { ReactNode, useCallback } from "react";

import { useModal } from "../../context";
import { motion, AnimatePresence } from "framer-motion";

interface IModalProps {
  className?: string;
  children: ReactNode;
}

export const Modal: React.FC<IModalProps> = ({ className, children }) => {
  const { closeModal, statusModal } = useModal();

  const closeModalFunc = useCallback(() => {
    closeModal();
  }, []);

  return (
    <AnimatePresence>
      {statusModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={closeModalFunc}
          className="fixed flex justify-center items-center bg-black bg-opacity-60 top-0 h-screen w-screen"
        >
          <motion.div
            initial={{ translateY: "-100px", opacity: 0 }}
            animate={{ translateY: "0px", opacity: 1 }}
            exit={{ translateY: "-100px", opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`absolute bg-white rounded-[10px] min-h-[200px] w-[50%] sm:w-[90%] max-w-3xl !opacity-100 ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
