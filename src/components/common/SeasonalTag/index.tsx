import { motion } from "motion/react";
import styles from "./style.module.css";

const SeasonalTag = ({
  className,
  delay = 0,
  scale = 1,
}: {
  className?: string;
  delay?: number;
  scale?: number;
}) => {
  return (
    <motion.div
      className={`${styles.container} ${className || ""}`}
      initial={{ opacity: 0, scale: scale * 0.1, rotate: -90 }}
      animate={{ opacity: 1, scale: scale, rotate: 10 }}
      transition={{ type: "spring", stiffness: 200, damping: 10, delay: delay }}
    >
      <div className={styles.border} />
      <div className={styles.textContainer}>
        <p>期間</p>
        <p>限定</p>
      </div>
      <p className={styles.en}>seasonal!</p>
    </motion.div>
  );
};

export default SeasonalTag;
