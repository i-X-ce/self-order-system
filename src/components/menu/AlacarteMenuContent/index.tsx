// import styles from "./style.module.css";
import MenuSection from "../MenuSectoin";
import { CategoryMenu } from "../../../utils/menu";

const AlacarteMenuContent = () => {
  return (
    <div>
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
