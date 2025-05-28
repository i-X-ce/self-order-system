import { motion } from "motion/react";
import type { ColorType } from "../../../utils/colorType";
import { MenuRecord } from "../../../utils/menu";
import ImgCircle from "../../common/ImgCircle";
import styles from "./style.module.css";
import MenuTitle from "../MenuTitle";

const SetMenuContent = () => {
  return (
    <div>
      <section className={styles.topSection}>
        <motion.div
          className={styles.topImgContainer}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
        >
          <ImgCircle
            src={MenuRecord.espresso.img || ""}
            className={styles.topImg}
          />
          <p>+</p>
          <ImgCircle
            src={MenuRecord.dorayaki_burger.img || ""}
            className={styles.topImg}
          />
        </motion.div>
        <motion.div
          className={styles.topTextContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.2,
          }}
        >
          <MenuTitle title="セットメニュー" subTitle="Set Menu" />
          <p className={styles.topDescription}>
            当店自慢のコーヒーやお茶と、パティシエ特製のお菓子を組み合わせたセットメニュー。お得な価格で、心温まるひとときをお楽しみいただけます。コーヒーはハンドドリップで丁寧に淹れた一杯を、またお茶は厳選された国産茶葉を使用。お菓子は季節ごとの特製スイーツをご用意。午後の休憩や大切な人との時間に、ぜひご利用ください。
          </p>
        </motion.div>
      </section>
      <SetMenuSection
        title={"コーヒーセット"}
        subTitle={"coffee set"}
        description="バリスタが厳選した豆を使い、一杯ずつ丁寧にハンドドリップで淹れる自慢のコーヒーと、当店特製のお菓子がセットでお得に。お供には、パティシエが腕によりをかけた洋菓子のほか、コーヒーと意外な好相性を見せるこだわりの和菓子もご用意。午後の休憩、自分へのご褒美に。"
        img={MenuRecord.espresso?.img || ""}
        textColor="section"
        bgColor="text"
      />
      <SetMenuSection
        title={"お茶セット"}
        subTitle={"tea set"}
        description="香り豊かなお茶と、当店自慢のお菓子で、心和むひとときを。「お茶セット」では、厳選された国産緑茶、香り高いフレーバーティー、多彩なお茶の中からお好みの一杯をお選びいただけます。お供には、季節の風情を映した上品な和菓子や、お茶の風味を引き立てるパティシエ特製の洋菓子をご用意。"
        img={MenuRecord.gyokuro?.img || ""}
        textColor="text"
        bgColor="main"
        reverse
      />
    </div>
  );
};

export default SetMenuContent;

function SetMenuSection({
  title,
  subTitle,
  description,
  img,
  textColor,
  bgColor,
  reverse = false,
}: {
  title: string;
  subTitle: string;
  description: string;
  img: string;
  textColor: ColorType;
  bgColor: ColorType;
  reverse?: boolean;
}) {
  const imgDiff = "-30px";
  const textMotion = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 10, damping: 2 },
  };

  return (
    <motion.section
      className={styles.setMenuSection}
      style={{
        backgroundColor: `var(--color-${bgColor})`,
        flexDirection: reverse ? "row-reverse" : "row",
      }}
      whileHover="hover"
      id={subTitle}
    >
      <motion.div
        className={styles.textContainer}
        style={{ color: `var(--color-${textColor})` }}
        variants={{ hover: { x: reverse ? 20 : -20 } }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
      >
        <motion.p
          className={styles.sectionSubTitle}
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {subTitle}
        </motion.p>
        <motion.p
          className={styles.sectionTitle}
          {...textMotion}
          transition={{ delay: 0.3 }}
        >
          {title}
        </motion.p>
        <motion.div
          className={styles.sectionBorder}
          style={{ borderColor: `var(--color-${textColor})` }}
          {...textMotion}
          transition={{ delay: 0.4 }}
        />
        <motion.p
          className={styles.sectionDescription}
          {...textMotion}
          transition={{ delay: 0.5 }}
        >
          {description}
        </motion.p>
      </motion.div>
      <div className={styles.imgSpace} />
      <motion.div
        className={styles.sectionImg}
        style={reverse ? { left: imgDiff } : { right: imgDiff }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        variants={{ hover: { scale: 1.3 } }}
        initial={{ opacity: 0.5, x: (reverse ? -1 : 1) * 100 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <ImgCircle src={img} />
      </motion.div>
    </motion.section>
  );
}
