import React from "react";
import styles from "./style.module.css";
import MenuNavigation from "../../components/menu/MenuNavigation";
import MenuSection from "../../components/menu/MenuSectoin";
import { CategoryMenu } from "../../utils/menu";
import { motion } from "motion/react";

const MenuPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
    >
      <MenuNavigation />
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
    </motion.div>
  );
};

export default MenuPage;
