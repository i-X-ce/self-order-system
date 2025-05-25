import styles from "./style.module.css";
import { MenuRecord, type MenuID } from "../../../utils/menu";
import { motion } from "motion/react";
import { usePage } from "../../common/PageProvider";

const TopMenuButton = ({
  menuID,
  color = "main",
  title = "タイトル",
  subTitle = "subitle",
  delay = 0,
}: {
  menuID: MenuID;
  color?: "main" | "accent" | "card";
  title?: string;
  subTitle?: string;
  delay?: number;
}) => {
  const menuData = MenuRecord[menuID];
  const { page: _, setPage } = usePage();

  return (
    <motion.button
      className={styles.button}
      style={{ backgroundColor: `var(--color-${color})` }}
      onClick={() => {
        setPage("menu");
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ right: "-300px", opacity: 0 }}
      animate={{ right: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay }}
    >
      <div
        className={styles.menuImg}
        style={{ backgroundImage: `url(${menuData.img})` }}
      />
      <div className={styles.texts}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.subTitle}>{subTitle}</p>
      </div>
    </motion.button>
  );
};

export default TopMenuButton;
