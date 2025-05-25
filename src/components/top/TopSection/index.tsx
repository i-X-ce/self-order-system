import React from "react";
import styles from "./style.module.css";
import { motion } from "motion/react";

const TopSection = ({
  title,
  subTitle,
  description,
  children,
  color = "background",
}: {
  title: string;
  subTitle: string;
  description: string;
  children?: React.ReactNode;
  color?: string;
}) => {
  return (
    <motion.section
      className={styles.section}
      style={{ backgroundColor: `var(--color-${color})` }}
      whileHover="hover"
    >
      <motion.div
        className={styles.hoverCurtain}
        variants={{
          hover: { right: "0%" },
        }}
      />
      <motion.div
        className={styles.textContainer}
        variants={{
          hover: { color: `var(--color-${color})`, scale: 1.05 },
        }}
      >
        <p className={styles.title}>{title}</p>
        <motion.p
          className={styles.subTitle}
          variants={{
            hover: {
              backgroundColor: `var(--color-${color})`,
              color: "var(--color-text)",
            },
          }}
        >
          {subTitle}
        </motion.p>
        <p className={styles.description}>{description}</p>
      </motion.div>

      <div className={styles.menuButtons}>{children}</div>
    </motion.section>
  );
};

export default TopSection;
