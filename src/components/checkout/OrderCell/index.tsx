import styles from "./style.module.css";
import { useOrder, type OrderType } from "../../common/OrderProvider";
import { MenuRecord } from "../../../utils/menu";
import CommonButton from "../../common/CommonButton";
import { motion } from "motion/react";
import ImgCircle from "../../common/ImgCircle";

const OrderCell = ({
  data,
  index,
}: {
  data: OrderType;
  index: number;
  delay?: number;
}) => {
  const menu = MenuRecord[data.menuID];
  const { orders: _, setOrders } = useOrder();

  return (
    <motion.tr
      layout
      className={styles.tr}
      whileHover="hover"
      // initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 40 }}
      // transition={{ delay: delay }}
      variants={{ hover: { x: 10 } }}
    >
      <td className={styles.nameCell}>
        <ImgCircle src={menu.img as string} className={styles.img} />
        <div className={styles.nameContainer}>
          <p className={styles.nameEn}>{menu.id?.replace("_", " ")}</p>
          <p className={styles.name}>{menu.name}</p>
        </div>
      </td>
      <td className={styles.number}>{data.count}</td>
      <td className={styles.number}>
        {menu.price * data.count}
        <span style={{ fontSize: "0.8rem" }}>円</span>
      </td>
      <td className={styles.buttonCell}>
        <motion.div
          className={styles.buttonContainer}
          initial={{ opacity: 0 }}
          variants={{
            hover: { opacity: 1 },
          }}
        >
          <CommonButton
            title="削除"
            color="error"
            onClick={() => {
              setOrders((prev) => {
                return prev.filter((_, i) => {
                  return i !== index;
                });
              });
            }}
          />
        </motion.div>
      </td>
    </motion.tr>
  );
};

export default OrderCell;
