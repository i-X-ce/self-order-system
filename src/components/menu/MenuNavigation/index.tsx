import styles from "./style.module.css";
import MenuNavBigButton from "../MenuNavBigButton";
import { type SubMenuType } from "../../common/SubMenuProvider";

export type SubMenuLinkType = { title: string; subTitle: string; id: string };

const subMenuLinksRecord: Record<SubMenuType, SubMenuLinkType[]> = {
  seasonal: [
    {
      title: "季節のお飲み物",
      subTitle: "seasonal drinks",
      id: "seasonal drinks",
    },
    {
      title: "季節のスイーツ",
      subTitle: "seasonal sweets",
      id: "seasonal sweets",
    },
  ],
  set: [
    {
      title: "コーヒーセット",
      subTitle: "coffee set",
      id: "coffee-set",
    },
    { title: "お茶セット", subTitle: "tea set", id: "tea-set" },
  ],
  alacarte: [
    {
      title: "コーヒー",
      subTitle: "coffee",
      id: "coffee",
    },
    {
      title: "お茶",
      subTitle: "tea",
      id: "tea",
    },
    {
      title: "スイーツ",
      subTitle: "sweets",
      id: "sweets",
    },
  ],
};

const MenuNavigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.bigButtonContainer}>
        <MenuNavBigButton
          title="季節"
          subTitle="seasonal"
          color="main"
          subMenuID="seasonal"
          subMenuLinks={subMenuLinksRecord.seasonal}
        />
        <MenuNavBigButton
          title="セット"
          subTitle="set"
          subMenuID="set"
          subMenuLinks={subMenuLinksRecord.set}
        />
        <MenuNavBigButton
          title="単品"
          subTitle="À la carte"
          color="accent"
          subMenuID="alacarte"
          subMenuLinks={subMenuLinksRecord.alacarte}
        />
      </div>
    </nav>
  );
};

export default MenuNavigation;
