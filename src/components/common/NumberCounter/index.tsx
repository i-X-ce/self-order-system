import type { ColorType } from "../../../utils/colorType";
import styles from "./style.module.css";
import { motion } from "motion/react";

const NumberCounter = ({
  value = 1,
  unit = "",
  dark = false,
  onChange,
}: {
  value?: number;
  unit?: string;
  dark?: boolean;
  onChange?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    value: number
  ) => void;
}) => {
  const handleNowValueChange = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    add: number
  ) => {
    e.stopPropagation();
    onChange?.(e, Math.min(Math.max(value + add, 1), 99));
  };
  const textColorStyle = `var(--color-${dark ? "background" : "text"})`;
  const bgColorStyle = `var(--color-${!dark ? "background" : "text"})`;

  return (
    <div
      className={styles.container}
      style={{
        backgroundColor: bgColorStyle,
        color: textColorStyle,
        border: dark ? `1px solid ${textColorStyle}` : "none",
      }}
    >
      <Button
        onClick={(e) => handleNowValueChange(e, -1)}
        bgColorStyle={bgColorStyle}
        textColorStyle={textColorStyle}
      >
        -
      </Button>
      <p className={styles.value}>
        {value}
        <span className={styles.unit}>{unit}</span>
      </p>
      <Button
        onClick={(e) => handleNowValueChange(e, 1)}
        bgColorStyle={bgColorStyle}
        textColorStyle={textColorStyle}
      >
        +
      </Button>
    </div>
  );
};

export default NumberCounter;

function Button({
  children,
  bgColorStyle,
  textColorStyle,
  onClick,
}: {
  children: React.ReactNode;
  bgColorStyle: string;
  textColorStyle: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <motion.button
      className={styles.button}
      style={{
        border: `1px solid ${textColorStyle}`,
        color: textColorStyle,
      }}
      onClick={onClick}
      whileHover="hover"
      variants={{ hover: { color: bgColorStyle } }}
    >
      <motion.div
        className={styles.buttonBG}
        style={{
          backgroundColor: textColorStyle,
        }}
        initial={{ scale: 0, opacity: 0 }}
        variants={{ hover: { scale: 1, opacity: 1 } }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <p style={{ zIndex: 2 }}>{children}</p>
    </motion.button>
  );
}
