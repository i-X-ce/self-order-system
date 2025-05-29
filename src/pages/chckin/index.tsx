import { useState } from "react";
import NumberCounter from "../../components/common/NumberCounter";
import styles from "./style.module.css";
import { usePage } from "../../components/common/PageProvider";
import { motion } from "motion/react";

const CheckinPage = () => {
  const [value, setValue] = useState(1);
  const { page: _, setPage } = usePage();

  return (
    <motion.section
      className={styles.container}
      onClick={() => {
        setPage("home");
      }}
      exit={{ opacity: 0, y: -200 }}
      whileHover={{ y: 10 }}
      whileTap={{ y: 12 }}
    >
      <div className={styles.topWrapper}>
        <div className={styles.topContainer}>
          <img
            src="/img/icon/LytoRetoRogo.svg"
            alt=""
            className={styles.rogo}
          />
          <div className={styles.textContainer}>
            <p className={styles.title}>
              ようこそ
              <span className={styles.lytoreto}>
                <ruby>
                  喫茶<rt>きっさ</rt>
                </ruby>
                リトリト
              </span>
              へ。
            </p>
            <p className={styles.subTitle}>Welcome to Cafe LytoReto.</p>
          </div>
        </div>
        <div className={styles.counterContainer}>
          {/* <p>人数を入力してください。</p> */}
          <NumberCounter
            value={value}
            onChange={(_, v) => setValue(v)}
            unit="名"
            dark
          />
        </div>
      </div>
      <div className={styles.downButtonContainer}>
        <p className={styles.downButton}>{"《"}</p>
      </div>
    </motion.section>
  );
};

export default CheckinPage;
