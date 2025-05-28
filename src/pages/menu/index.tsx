import { type ReactNode } from "react";
// import styles from "./style.module.css";
import MenuNavigation from "../../components/menu/MenuNavigation";
import { motion } from "motion/react";
import {
  useSubMenu,
  type SubMenuType,
} from "../../components/common/SubMenuProvider";
import AlacarteMenuContent from "../../components/menu/AlacarteMenuContent";
import SeasonalMenuContent from "../../components/menu/SeasonalMenuContent";

const MenuPage = () => {
  const { subMenu, setSubMenu: _ } = useSubMenu();
  const pageContent: Record<SubMenuType, ReactNode> = {
    seasonal: <SeasonalMenuContent key={"seasonal"} />,
    set: undefined,
    alacarte: <AlacarteMenuContent key={"alacarte"} />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
    >
      <MenuNavigation />
      {pageContent[subMenu]}
    </motion.div>
  );
};

export default MenuPage;
