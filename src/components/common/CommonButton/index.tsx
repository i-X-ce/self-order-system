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
  disabled = false,
  size = "large",
  onClick,
}: {
  title: string;
  subTitle?: string;
  color?: ColorType;
  textColor?: ColorType;
  className?: string;
  flexExpand?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}) => {
  const sizeStyles = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
  };
  const sizeStyle = sizeStyles[size];
  const baseColor = disabled
    ? "var(--color-disabled)"
    : `var(--color-${color})`;
  const baseTextColor = disabled
    ? "var(--color-card)"
    : `var(--color-${textColor})`;
  const whileTap = disabled ? undefined : { y: 10 };
  const whileHoverScale = disabled ? undefined : { scale: 1.05 };

  return (
    <motion.button
      className={` ${styles.button} ${sizeStyle} ${className || ""}`}
      style={{
        backgroundColor: baseColor,
        color: baseTextColor,
        flex: flexExpand ? "1" : "auto",
      }}
      onClick={(e) => {
        if (disabled) return;
        onClick?.(e);
      }}
      whileTap={whileTap}
      whileHover={whileHoverScale}
      transition={{ type: "spring", stiffness: 1000, damping: 30 }}
    >
      <p className={styles.title}>{title}</p>
      {subTitle && <p className={styles.subTitle}>-{subTitle}-</p>}
    </motion.button>
  );
};

export default CommonButton;
