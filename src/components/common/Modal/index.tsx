import styles from "./style.module.css";
import BackDrop from "../BackDrop";
import { motion } from "motion/react";
import type { ReactNode } from "react";

const Modal = ({
  open = false,
  children,
  onClose,
}: {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}) => {
  return (
    <BackDrop open={open} onClose={onClose}>
      <motion.div
        className={styles.container}
        onClick={(e) => {
          e.stopPropagation();
        }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 1000, damping: 20 }}
      >
        {children}
      </motion.div>
    </BackDrop>
  );
};

export default Modal;
