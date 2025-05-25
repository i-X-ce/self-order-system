import type { MouseEventHandler } from "react";
import type { ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";
import { motion } from "motion/react";

const CommonButton = ({
  title,
  subTitle,
  color = "text",
  textColor = "card",
  onClick,
}: {
  title: string;
  subTitle?: string;
  color?: ColorType;
  textColor?: ColorType;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  return (
    <motion.button
      className={styles.button}
      style={{
        backgroundColor: `var(--color-${color})`,
        color: `var(--color-${textColor})`,
      }}
      onClick={onClick}
      whileTap={{ y: 10 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
    >
      <p className={styles.title}>{title}</p>
      {subTitle && <p className={styles.subTitle}>-{subTitle}-</p>}
    </motion.button>
  );
};

export default CommonButton;
