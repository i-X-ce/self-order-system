import styles from "./style.module.css";
import type { MenuID, MenuType } from "../../../utils/menu";
import { motion } from "motion/react";
import { useState } from "react";
import CommonButton from "../../common/CommonButton";
import OptionUI from "../../common/OptionUI";
import { useOrder, type OrderType } from "../../common/OrderProvider";

const MenuItem = ({ menu, delay }: { menu: MenuType; delay?: number }) => {
  const [open, setOpen] = useState(false);
  const imgId = `img_${menu.id}`;
  const { orders, setOrders } = useOrder();

  return (
    <motion.button
      className={styles.container}
      onClick={() => {
        setOpen(true);
      }}
      whileHover="hover"
      initial={{ top: "300px", opacity: 0 }}
      animate={{ top: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 10, delay }}
    >
      <motion.div
        className={`${styles.img} ${styles.menuImg}`}
        style={{ backgroundImage: `url(${menu.img})` }}
        layoutId={imgId}
        variants={{
          hover: {
            scale: 1.05,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
          },
        }}
      />
      <div className={styles.texts}>
        <p className={styles.nameEn}>{menu.id?.replace("_", " ")}</p>
        <p className={styles.name}>{menu.name}</p>
        {/* <div className={styles.divider} /> */}
        <p className={styles.price}>
          {menu.price}
          <span style={{ fontSize: "0.8rem" }}>円</span>
        </p>
      </div>

      {/* ポップアップ */}
      {open && (
        <motion.div
          className={styles.backDrop}
          onClick={(e) => {
            e.stopPropagation();
            setOpen(false);
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            className={styles.backDropContent}
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className={`${styles.img} ${styles.backDropImg}`}
              style={{ backgroundImage: `url(${menu.img})` }}
              layoutId={imgId}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 10 }}
            />

            <div className={styles.backDropLeftContainer}>
              {/* テキスト */}
              <div className={styles.backDropTexts}>
                <p className={styles.backDropName}>{menu.name}</p>
                <div className={styles.backDropSubName}>
                  {menu.id?.replace("_", " ")}
                </div>
                <p className={styles.backDropDescription}>{menu.description}</p>
                <p className={styles.backDropPrice}>
                  {menu.price}
                  <span style={{ fontSize: "1.2rem" }}>円</span>
                </p>
              </div>

              {/* UI */}
              <div className={styles.backDropToolContainer}>
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
                    setOrders((prev) => {
                      const newOrder: OrderType = {
                        id: menu.id as MenuID,
                        count: 1,
                      };
                      return [...prev, newOrder];
                    });
                    setOpen(false);
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.button>
  );
};

export default MenuItem;
