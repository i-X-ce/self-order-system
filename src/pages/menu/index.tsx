import React from "react";
import styles from "./style.module.css";
import MenuNavigation from "../../components/menu/MenuNavigation";
import MenuSection from "../../components/menu/MenuSectoin";
import { CategoryMenu } from "../../utils/menu";

const MenuPage = () => {
  return (
    <div>
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
    </div>
  );
};

export default MenuPage;
