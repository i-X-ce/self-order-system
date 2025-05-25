import styles from "./style.module.css";
import type { MenuType } from "../../../utils/menu";

const MenuItem = ({ menu }: { menu: MenuType }) => {
  return (
    <button className={styles.container}>
      <div
        className={styles.img}
        style={{ backgroundImage: `url(${menu.img})` }}
      />
      <div className={styles.texts}>
        <p className={styles.name}>{menu.name}</p>
        {/* <div className={styles.divider} /> */}
        <p className={styles.nameEn}>{menu.id}</p>
        <p className={styles.price}>
          {menu.price}
          <span style={{ fontSize: "0.8rem" }}>円</span>
        </p>
      </div>
    </button>
  );
};

export default MenuItem;
