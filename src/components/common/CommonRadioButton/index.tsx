import React from "react";
import styles from "./style.module.css";
import { AnimatePresence, motion } from "motion/react";
import type { ColorType } from "../../../utils/colorType";

const CommonRadioButton = ({ options }: { options: string[] }) => {
  const [selectedOption, setSelectedOption] = React.useState<string>(
    options[0]
  );
  const colors: ColorType[] = ["main", "card", "accent"];

  return (
    <div className={styles.container}>
      {options.map((option, i) => (
        <motion.button
          className={styles.option}
          key={option}
          onClick={() => setSelectedOption(option)}
        >
          <p className={styles.optionName}>{option}</p>
          <div
            className={styles.radioButton}
            style={{
              backgroundColor: `var(--color-${colors[i % colors.length]})`,
            }}
          >
            {selectedOption === option && (
              <AnimatePresence>
                <motion.div
                  key={`${option}-inner`}
                  className={styles.radioButtonInner}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 20,
                  }}
                />
              </AnimatePresence>
            )}
          </div>
        </motion.button>
      ))}
    </div>
  );
};

export default CommonRadioButton;
