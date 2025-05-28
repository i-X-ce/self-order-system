import styles from "./style.module.css";
import type { ColorType } from "../../../utils/colorType";
import { motion } from "motion/react";
import { useSubMenu, type SubMenuType } from "../../common/SubMenuProvider";
import type { SubMenuLinkType } from "../MenuNavigation";

const MenuNavBigButton = ({
  title,
  subTitle,
  subMenuID,
  color = "card",
  subMenuLinks,
}: {
  title: string;
  subTitle: string;
  subMenuID: SubMenuType;
  color?: ColorType;
  subMenuLinks?: SubMenuLinkType[];
}) => {
  const { subMenu: _, setSubMenu } = useSubMenu();

  return (
    <motion.button
      onClick={() => {
        setSubMenu(subMenuID);
      }}
      className={styles.button}
      style={{ backgroundColor: `var(--color-${color})` }}
      whileTap={{ scale: 1 }}
      whileHover="hover"
    >
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>-{subTitle}-</p>
      </div>
      <motion.ul
        className={styles.subMenuLinks}
        style={{ backgroundColor: `var(--color-${color})` }}
        initial={{ opacity: 0, pointerEvents: "none", y: -10 }}
        variants={{
          hover: { opacity: 1, pointerEvents: "auto", y: 0 },
        }}
      >
        {subMenuLinks?.map((link) => (
          <a href={`#${link.id}`}>
            <motion.li
              key={link.id}
              className={styles.subMenuLink}
              whileHover={{ paddingLeft: "10px" }}
            >
              <p className={styles.linkSubTitle}>{link.subTitle}</p>
              <p className={styles.linkTitle}>{link.title}</p>
            </motion.li>
          </a>
        ))}
      </motion.ul>
    </motion.button>
  );
};

export default MenuNavBigButton;
