import styles from "./style.module.css";
import type { MenuID, MenuType } from "../../../utils/menu";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import CommonButton from "../../common/CommonButton";
import OptionUI from "../../common/OptionUI";
import { useOrder, type OrderType } from "../../common/OrderProvider";
import NumberCounter from "../../common/NumberCounter";
import SeasonalTag from "../../common/SeasonalTag";

const MenuItem = ({
  menu,
  delay = 0,
  nonText = false,
  nameKey,
}: {
  menu: MenuType;
  delay?: number;
  nonText?: boolean;
  nameKey?: string | number;
}) => {
  const [open, setOpen] = useState(false);
  // const imgId = `img_${menu.id}`;
  const { orders: _, setOrders } = useOrder();
  const getLayoutID = () => {
    return `${nameKey}_${menu.id}`;
  };
  const [value, setValue] = useState(1);

  return (
    <motion.button
      className={styles.container}
      onClick={() => {
        setOpen(true);
      }}
      whileHover="hover"
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      // animate={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay }}
    >
      {!nonText && menu.isSeasonal && (
        <SeasonalTag
          className={styles.seasonalTag}
          scale={0.5}
          delay={delay + 0.2}
        />
      )}
      <div
        className={styles.imgContainer}
        style={{
          border: nonText ? "none" : "",
        }}
      >
        <motion.div
          className={`${styles.img} ${styles.menuImg}`}
          style={{
            backgroundImage: `url(${menu.img})`,
          }}
          layoutId={getLayoutID()}
          variants={{
            hover: {
              scale: 1.1,
              rotate: 10,
            },
          }}
        />
      </div>
      {!nonText && (
        <div className={styles.texts}>
          <p className={styles.nameEn}>{menu.id?.replace("_", " ")}</p>
          <p className={styles.name}>{menu.name}</p>
          {/* <div className={styles.divider} /> */}
          <p className={styles.price}>
            {menu.price}
            <span style={{ fontSize: "0.8rem" }}>円</span>
          </p>
        </div>
      )}

      {/* ポップアップ */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.backDrop}
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div
              className={styles.backDropContent}
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                className={`${styles.img} ${styles.backDropImg}`}
                style={{ backgroundImage: `url(${menu.img})` }}
                layoutId={getLayoutID()}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 15 }}
              />

              <div className={styles.backDropLeftContainer}>
                {/* テキスト */}
                <div className={styles.backDropTexts}>
                  <p className={styles.backDropName}>{menu.name}</p>
                  <div className={styles.backDropSubName}>
                    {menu.id?.replace("_", " ")}
                  </div>
                  <p className={styles.backDropDescription}>
                    {menu.description}
                  </p>
                  <p className={styles.backDropPrice}>
                    {menu.price}
                    <span style={{ fontSize: "1.2rem" }}>円</span>
                  </p>
                </div>

                {/* UI */}
                <div className={styles.backDropToolContainer}>
                  <NumberCounter
                    value={value}
                    onChange={(value) => setValue(value)}
                  />
                  <div className={styles.backDropOptions}>
                    {menu.options?.map((option) => (
                      <OptionUI key={option} type={option} />
                    ))}
                  </div>
                  <CommonButton
                    title="注文"
                    subTitle="order"
                    color="enhanced"
                    onClick={() => {
                      setOpen(false);
                      if (!open) return;
                      setOrders((prev) => {
                        const newOrder: OrderType = {
                          id: Math.random(),
                          menuID: menu.id as MenuID,
                          count: value,
                        };
                        return [...prev, newOrder];
                      });
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MenuItem;
