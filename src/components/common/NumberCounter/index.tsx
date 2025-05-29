import styles from "./style.module.css";
import { motion } from "motion/react";

const NumberCounter = ({
  value = 1,
  unit = "",
  onChange,
}: {
  value?: number;
  unit?: string;
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

  return (
    <div className={styles.container}>
      <Button onClick={(e) => handleNowValueChange(e, -1)}>-</Button>
      <p className={styles.value}>{value}
        <span className={styles.unit}>{unit}</span>
        </p>
      <Button onClick={(e) => handleNowValueChange(e, 1)}>+</Button>
    </div>
  );
};

export default NumberCounter;

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) {
  return (
    <motion.button
      className={styles.button}
      onClick={onClick}
      whileHover="hover"
      variants={{ hover: { color: "var(--color-card)" } }}
    >
      <motion.div
        className={styles.buttonBG}
        initial={{ scale: 0, opacity: 0 }}
        variants={{ hover: { scale: 1, opacity: 1 } }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
      <p style={{ zIndex: 2 }}>{children}</p>
    </motion.button>
  );
}
