import styles from "./style.module.css";
import type { MenuType } from "../../../utils/menu";
import MenuItem from "../MenuItem";
import type { ColorType } from "../../../utils/colorType";

const MenuSection = ({
  title,
  subTitle,
  menuItems,
  color = "background",
}: {
  title: string;
  subTitle: string;
  menuItems?: MenuType[];
  color?: ColorType;
}) => {
  return (
    <section
      className={styles.section}
      style={{ backgroundColor: `var(--color-${color})` }}
    >
      <div className={styles.top}>
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </div>
      <div className={styles.itemContainer}>
        {menuItems?.map((menu) => (
          <MenuItem key={menu.id} menu={menu} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
