import styles from "./style.module.css";
import { motion } from "motion/react";

const Cloud = ({
  left = 0,
  right = 0,
  top = 0,
  bottom = 0,
  zindex = 0,
  size = 50,
  delay = 0,
}: {
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  zindex?: number;
  size?: number;
  delay?: number;
}) => {
  return (
    <div
      className={styles.container}
      style={{
        left: left ? `${left}px` : "auto",
        right: right ? `${right}px` : "auto",
        top: top ? `${top}px` : "auto",
        bottom: bottom ? `${bottom}px` : "auto",
        zIndex: zindex,
      }}
    >
      <div className={styles.cloudRow}>
        {Array.from({ length: 2 }).map((_, index) => (
          <CloudPart key={index + 3} size={size} delay={delay} />
        ))}
      </div>
      <div className={styles.cloudRow}>
        {Array.from({ length: 3 }).map((_, index) => (
          <CloudPart key={index} size={size} delay={delay} />
        ))}
      </div>
    </div>
  );
};

export default Cloud;

function CloudPart({ size, delay }: { size: number; delay: number }) {
  return (
    <motion.div
      className={styles.cloudPart}
      style={{ width: `${size * (1 + Math.random())}px` }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1.6 }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 20,
        delay: Math.random() * 0.2 + delay,
      }}
    />
  );
}
