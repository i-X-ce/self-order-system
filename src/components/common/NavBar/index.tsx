import { usePage } from "../PageProvider";
import styles from "./style.module.css";
import type { PageType } from "../PageProvider";
import { AnimatePresence, motion } from "motion/react";

const NavBar = () => {
  const { page, setPage } = usePage();
  const backArgs: Record<
    PageType,
    { page: PageType | null; name: string; nameEn: string }
  > = {
    home: {
      page: null,
      name: "",
      nameEn: "",
    },
    menu: {
      page: "home",
      name: "トップへ戻る",
      nameEn: "go to Top",
    },
    checkout: {
      page: "menu",
      name: "メニューへ戻る",
      nameEn: "go to Menu",
    },
    checkin: {
      page: null,
      name: "",
      nameEn: "",
    },
  };
  const backArg = backArgs[page];

  return (
    <nav className={styles.navBar}>
      <AnimatePresence>
        {backArg.page && (
          <motion.button
            key={backArg.page}
            className={styles.backButton}
            onClick={(e) => {
              e.stopPropagation();
              if (backArg.page) setPage(backArg.page);
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            whileHover={{ x: -10 }}
          >
            <p className={styles.backIcon}>{"<"}</p>
            <div>
              <p className={styles.nameEn}>{backArg.nameEn}</p>
              <p className={styles.name}>{backArg.name}</p>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      <motion.button
        className={styles.navBarInner}
        onClick={() => {
          setPage("home");
        }}
        whileHover="hover"
      >
        <motion.div
          className={styles.logo}
          variants={{
            hover: {
              rotate: 360,
            },
          }}
          transition={{ type: "spring", stiffness: 50, damping: 5 }}
        >
          <img src="/img/icon/LytoRetoRogo2.svg" alt="ロゴ" />
        </motion.div>
        <div>
          <p className={styles.nameEn}>Caffee Lyto Reto</p>
          <p className={styles.name}>喫茶リトリト</p>
        </div>
      </motion.button>
    </nav>
  );
};

export default NavBar;
