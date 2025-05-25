import React from "react";
import styles from "./style.module.css";
import type { OrderType } from "../../common/OrderProvider";
import { MenuRecord } from "../../../utils/menu";
import CommonButton from "../../common/CommonButton";
import { motion } from "motion/react";
import ImgCircle from "../../common/ImgCircle";

const OrderCell = ({ data }: { data: OrderType }) => {
  const menu = MenuRecord[data.id];
  return (
    <motion.tr layout className={styles.tr}>
      <td className={styles.nameCell}>
        <ImgCircle src={menu.img as string} className={styles.img} />
        <div className={styles.nameContainer}>
          <p className={styles.nameEn}>{menu.id?.replace("_", " ")}</p>
          <p className={styles.name}>{menu.name}</p>
        </div>
      </td>
      <td>{data.count}</td>
      <td>{menu.price * data.count}円</td>
      <td>
        <CommonButton title="削除" color="error" />
      </td>
    </motion.tr>
  );
};

export default OrderCell;
