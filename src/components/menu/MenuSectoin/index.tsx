import styles from "./style.module.css";
import type { MenuType } from "../../../utils/menu";
import MenuItem from "../MenuItem";
import type { ColorType } from "../../../utils/colorType";
import MenuTitle from "../MenuTitle";

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
      <MenuTitle title={title} subTitle={subTitle} />

      <div className={styles.itemContainer}>
        {menuItems?.map((menu, i) => (
          <MenuItem key={menu.id} menu={menu} delay={i * 0.1} />
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
