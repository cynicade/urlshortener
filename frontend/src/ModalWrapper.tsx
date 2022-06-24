import { motion } from "framer-motion";
import React from "react";

interface IProps {
  // setShowModal: (show: boolean) => void;
  children: JSX.Element;
}

export const ModalWrapper: React.FC<IProps> = ({
  // setShowModal,
  children,
}: IProps): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed top-0 left-0 bg-black/80 w-screen h-screen"
      // onClick={() => setShowModal(false)}
    >
      {children}
    </motion.div>
  );
};
