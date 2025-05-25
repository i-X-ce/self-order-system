import styles from "./style.module.css";
import type { ColorType } from "../../../utils/colorType";
import { motion } from "motion/react";

const MenuNavBigButton = ({
  title,
  subTitle,
  color = "card",
}: {
  title: string;
  subTitle: string;
  color?: ColorType;
}) => {
  return (
    <motion.button
      className={styles.button}
      style={{ backgroundColor: `var(--color-${color})` }}
      whileTap={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.subTitle}>-{subTitle}-</p>
    </motion.button>
  );
};

export default MenuNavBigButton;
