import { motion } from "motion/react";
import { getSeasonalMenu, MenuRecord } from "../../../utils/menu";
import Cloud from "../Cloud";
import MenuItem from "../MenuItem";
import styles from "./style.module.css";
import MenuSection from "../MenuSectoin";

const seasonalDrinks = getSeasonalMenu().filter(
  (menu) => menu.category === "tea" || menu.category === "coffee"
);
const seasonalSweets = getSeasonalMenu().filter(
  (menu) => menu.category === "sweets"
);

const SeasonalMenuContent = () => {
  let delay = 0;
  const getDelay = () => {
    delay += 0.05;
    return delay;
  };
  let key = 0;
  const setKey = () => {
    key += 1;
    return `seosonal-top-${key}`;
  };

  return (
    <div>
      <section className={styles.topSection}>
        <Cloud left={50} bottom={50} size={70} key={0} />
        <Cloud right={50} top={50} size={60} key={1} />
        <div className={styles.topLeftContainer}>
          <MenuItem
            menu={MenuRecord.kakigori}
            nameKey={setKey()}
            nonText
            delay={getDelay()}
          />
          <MenuItem
            menu={MenuRecord.kuri_yokan}
            nameKey={setKey()}
            nonText
            delay={getDelay()}
          />
          <MenuItem
            menu={MenuRecord.mont_blanc}
            nameKey={setKey()}
            nonText
            delay={getDelay()}
          />
        </div>
        <div className={styles.topTextContainer}>
          <motion.p
            className={styles.summer}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ rotate: 360, scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
          >
            夏
          </motion.p>
          <motion.p
            className={styles.summerEn}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            summer
          </motion.p>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            夏限定のお飲み物、スイーツをご用意しております。夏のさわやかな味をお楽しみください。
          </motion.p>
          <motion.div
            className={styles.textBackGround}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3,
            }}
          />
        </div>
        <div className={styles.topRightContainer}>
          <MenuItem
            menu={MenuRecord.lemon_tea}
            nameKey={setKey()}
            nonText
            delay={getDelay()}
          />
          <MenuItem
            menu={MenuRecord.cappuccino}
            nameKey={setKey()}
            nonText
            delay={getDelay()}
          />
          <MenuItem
            menu={MenuRecord.gyokuro}
            nameKey={setKey()}
            nonText
            delay={getDelay()}
          />
        </div>
      </section>
      <MenuSection
        title="季節の飲み物"
        subTitle="seasonal drinks"
        menuItems={seasonalDrinks}
        color="section"
      />
      <MenuSection
        title="季節のスイーツ"
        subTitle="seasonal sweets"
        menuItems={seasonalSweets}
      />
    </div>
  );
};

export default SeasonalMenuContent;
