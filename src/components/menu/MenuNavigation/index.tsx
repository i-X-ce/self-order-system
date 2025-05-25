import styles from "./style.module.css";
import MenuNavBigButton from "../MenuNavBigButton";

const MenuNavigation = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.bigButtonContainer}>
        <MenuNavBigButton title="飲み物" subTitle="coffee" color="main" />
        <MenuNavBigButton title="セット" subTitle="tea" />
        <MenuNavBigButton title="スイーツ" subTitle="sweets" color="accent" />
      </div>
    </nav>
  );
};

export default MenuNavigation;
