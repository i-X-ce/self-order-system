import styles from "./style.module.css";
import TopSection from "../../components/top/TopSection";
import TopMenuButton from "../../components/top/TopMenuButton";
import { motion } from "motion/react";
import Cloud from "../../components/menu/Cloud";

const TopPage = () => {
  let delay = 0;

  const delaySec = () => {
    delay++;
    return delay * 0.1;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
    >
      {/* 季節のメニュー */}
      <TopSection
        title="Seosonal Menu"
        subTitle="季節のメニュー"
        description="季節のお飲み物、スイーツをご用意しております。春夏秋冬、四季折々の味をお楽しみください。"
        subMenuID="seasonal"
      >
        <motion.div
          className={styles.summerBack}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
        />
        <Cloud right={-30} top={100} size={80} delay={0.8} />
        <Cloud right={450} top={1} size={20} delay={0.7} />
        <motion.div
          className={styles.summerContainer}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ rotate: 360, scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.3,
          }}
        >
          <p className={styles.summer}>夏</p>
          <p className={styles.summerEn}>Summer</p>
        </motion.div>
        <TopMenuButton
          menuID={"lemon_tea"}
          title="季節の飲み物"
          subTitle="seasonal drinks"
          color="card"
          delay={delaySec()}
        />
        <TopMenuButton
          menuID={"kakigori"}
          title="季節のスイーツ"
          subTitle="seasonal sweets"
          delay={delaySec()}
        />
      </TopSection>

      {/* セットメニュー */}
      <TopSection
        title="Set Menu"
        subTitle="セットメニュー"
        description="お飲み物一品とスイーツ一品をセットで楽しめます。単品で頼むよりも100円お安くなっております。"
        color="section"
        subMenuID="set"
      >
        <TopMenuButton
          menuID={"cappuccino"}
          title="コーヒーセット"
          subTitle="coffee set"
          color="card"
          delay={delaySec()}
        />
        <TopMenuButton
          menuID={"gyokuro"}
          title="お茶セット"
          subTitle="tea set"
          delay={delaySec()}
        />
      </TopSection>

      {/* 単品メニュー */}
      <TopSection
        title="À la carte"
        subTitle="単品メニュー"
        description="単品メニューは、ドリンクとスイーツをそれぞれお選びいただけます。どれも自信作ですので、ぜひお試しください。"
        subMenuID="alacarte"
      >
        <TopMenuButton
          menuID={"flat_white"}
          title="コーヒー"
          subTitle="coffee"
          color="accent"
          delay={delaySec()}
        />
        <TopMenuButton
          menuID={"genmaicha"}
          title="お茶"
          subTitle="tea"
          color="card"
          delay={delaySec()}
        />
        <TopMenuButton
          menuID={"dorayaki_burger"}
          title="スイーツ"
          subTitle="sweets"
          delay={delaySec()}
        />
      </TopSection>
    </motion.div>
  );
};

export default TopPage;
