import styles from "./style.module.css";
import MenuSection from "../MenuSectoin";
import { CategoryMenu, MenuRecord, type MenuType } from "../../../utils/menu";
import type { ColorType } from "../../../utils/colorType";
import MenuItem from "../MenuItem";
import { motion } from "motion/react";

const AlacarteMenuContent = () => {
  return (
    <div>
      <section className={styles.topSection}>
        <TopContent
          menu={MenuRecord.espresso}
          title="人気のコーヒー"
          subTitle="popular coffee"
          description="当店の人気コーヒーは、深いコクと香りが特徴のエスプレッソです。熟練のバリスタが一杯ずつ丁寧に抽出し、豆本来の豊かな風味を最大限に引き出しています。"
          color="accent"
          delay={0.1}
        />
        <TopContent
          menu={MenuRecord.sanshoku_dango}
          title="人気のスイーツ"
          subTitle="popular coffee"
          description="当店で人気のスイーツは、見た目も可愛らしい三色団子です。ほんのり甘いもちもちの団子が、口の中で優しいハーモニーを奏でます。"
          reverse
          color="card"
          delay={0.2}
        />
        <TopContent
          menu={MenuRecord.gyokuro}
          title="人気のお茶"
          subTitle="popular coffee"
          description="多くのお客様に選ばれているお茶は、上品な香りとまろやかな旨味が特徴の玉露です。"
          color="main"
          delay={0.3}
        />
      </section>
      <MenuSection
        title={"コーヒー"}
        subTitle={"coffee"}
        menuItems={CategoryMenu("coffee")}
      />
      <MenuSection
        title={"お茶"}
        subTitle={"tea"}
        menuItems={CategoryMenu("tea")}
        color="section"
      />
      <MenuSection
        title={"スイーツ"}
        subTitle={"sweets"}
        menuItems={CategoryMenu("sweets")}
      />
    </div>
  );
};

export default AlacarteMenuContent;

function TopContent({
  menu,
  title,
  subTitle,
  description,
  color = "background",
  reverse = false,
  delay = 0,
}: {
  menu: MenuType;
  title: string;
  subTitle: string;
  description: string;
  color?: ColorType;
  reverse?: boolean;
  delay?: number;
}) {
  return (
    <div
      className={styles.topContainer}
      style={{ flexDirection: reverse ? "column-reverse" : "column" }}
    >
      <motion.div
        className={styles.topTextContent}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: delay + 0.2,
        }}
      >
        <div className={styles.topTitleContent}>
          <p className={styles.topTitle}>{title}</p>
          <p className={styles.topSubTitle}>{subTitle}</p>
        </div>
        <p className={styles.topDescription}>{description}</p>
      </motion.div>
      <div className={styles.topImgContent}>
        <motion.div
          className={styles.topImgBG}
          style={{ backgroundColor: `var(--color-${color})` }}
          initial={{ opacity: 0.1, scale: 0.2 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 15, delay }}
        />
        <MenuItem menu={menu} nameKey={"top-content"} delay={delay + 0.3} />
      </div>
    </div>
  );
}
