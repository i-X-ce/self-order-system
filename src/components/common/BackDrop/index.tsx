import React, { type ReactNode } from "react";
import styles from "./style.module.css";
import { AnimatePresence, motion } from "motion/react";

const BackDrop = ({
  children,
  open = false,
  onClose,
}: {
  children?: ReactNode;
  open?: boolean;
  onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.backDrop}
          onClick={(e) => {
            onClose?.(e);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BackDrop;
