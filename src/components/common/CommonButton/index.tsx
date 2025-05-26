import type { MouseEventHandler } from "react";
import type { ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";
import { motion } from "motion/react";

const CommonButton = ({
  title,
  subTitle,
  color = "text",
  textColor = "card",
  className,
  flexExpand = false,
  size = "large",
  onClick,
}: {
  title: string;
  subTitle?: string;
  color?: ColorType;
  textColor?: ColorType;
  className?: string;
  flexExpand?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const sizeStyles = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };
  const sizeStyle = sizeStyles[size];

  return (
    <motion.button
      className={` ${styles.button} ${sizeStyle} ${className || ""}`}
      style={{
        backgroundColor: `var(--color-${color})`,
        color: `var(--color-${textColor})`,
        flex: flexExpand ? "1" : "auto",
      }}
      onClick={onClick}
      whileTap={{ y: 10 }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 1000, damping: 30 }}
    >
      <p className={styles.title}>{title}</p>
      {subTitle && <p className={styles.subTitle}>-{subTitle}-</p>}
    </motion.button>
  );
};

export default CommonButton;
