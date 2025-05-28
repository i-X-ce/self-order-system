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
  const menuLen = menuItems?.length ?? 0;
  let menuItemFormat: MenuType[][] = [];
  for (
    let i = 0;
    i < (menuItems?.length ?? 0) / 7 + (menuLen % 7 == 0 ? 0 : 1);
    i++
  ) {
    for (let j = 0; j < 7; j++) {
      if (menuItems && menuItems[i * 7 + j]) {
        if (!menuItemFormat[i]) menuItemFormat[i] = [];
        menuItemFormat[i][j] = menuItems[i * 7 + j];
      }
    }
  }

  return (
    <section
      className={styles.section}
      style={{ backgroundColor: `var(--color-${color})` }}
      id={`${subTitle}`}
    >
      <MenuTitle title={title} subTitle={subTitle} />

      <div className={styles.itemContainer}>
        {menuItemFormat.map((row, i) => (
          <>
            <div className={styles.row} key={`row-${i}`}>
              {row.slice(0, 4).map((menu, j) => (
                <MenuItem
                  key={menu.id}
                  nameKey={`${subTitle}_${menu.id}`}
                  menu={menu}
                  delay={(i * 0.1 + j * 0.05) % 1} // Adjust delay for each item
                />
              ))}
            </div>
            <div className={styles.row} key={`row-${i}-2`}>
              <div />
              {row.slice(4, 7).map((menu, j) => (
                <MenuItem
                  key={menu.id}
                  nameKey={`${subTitle}_${menu.id}`}
                  menu={menu}
                  delay={(i * 0.1 + (j + 3) * 0.05) % 1} // Adjust delay for each item
                />
              ))}
              <div />
            </div>
          </>
        ))}
        {/* {menuItems?.map((menu, i) => (
          <MenuItem key={menu.id} menu={menu} delay={i * 0.1} />
        ))} */}
      </div>
    </section>
  );
};

export default MenuSection;
