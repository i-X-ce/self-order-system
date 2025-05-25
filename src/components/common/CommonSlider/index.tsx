import React from "react";
import styles from "./style.module.css";

const CommonSlider = () => {
  const [value, setValue] = React.useState(0);

  return (
    <div className={styles.sliderContainer}>
      <p className={styles.value} style={{ opacity: value * 0.2 + 0.1 }}>
        {value}
      </p>
      <input
        className={styles.slider}
        type="range"
        min={0}
        max={5}
        value={value}
        onChange={(e) => {
          setValue(Number(e.target.value));
        }}
      />
    </div>
  );
};

export default CommonSlider;
