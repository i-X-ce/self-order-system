import styles from "./style.module.css";
import { motion } from "motion/react";

const NumberCounter = ({
  value = 0,
  onChange,
}: {
  value?: number;
  onChange?: (value: number) => void;
}) => {
  const handleNowValueChange = (add: number) => {
    onChange?.(Math.min(Math.max(value + add, 1), 99));
  };

  return (
    <div className={styles.container}>
      <Button onClick={() => handleNowValueChange(-1)}>-</Button>
      <p className={styles.value}>{value}</p>
      <Button onClick={() => handleNowValueChange(1)}>+</Button>
    </div>
  );
};

export default NumberCounter;

function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
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
