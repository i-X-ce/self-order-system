import React from "react";
import styles from "./style.module.css";
import OrderCell from "../../components/checkout/OrderCell";
import { useOrder } from "../../components/common/OrderProvider";
import CommonButton from "../../components/common/CommonButton";
import { AnimatePresence, motion } from "motion/react";
import MenuTitle from "../../components/menu/MenuTitle";

const CheckoutPage = () => {
  const { orders, setOrders } = useOrder();

  return (
    <section className={styles.container}>
      <div className={styles.topContainer}>
        <div className={styles.titleContainer}>
          <MenuTitle
            title="ご注文確認"
            subTitle="order confirmation"
            border={false}
          />
          <p className={styles.description}>
            下記の内容でよろしければ、注文を確定してください。
            <br />
            何か変更がある場合は、注文を削除して再度ご注文ください。
          </p>
        </div>
        <AnimatePresence>
          <motion.table className={styles.table}>
            <tr className={styles.tableHeader}>
              <th style={{ width: "40%" }}>商品</th>
              <th>数量</th>
              <th>価格</th>
              <th></th>
            </tr>
            <AnimatePresence>
              {orders.length > 0 ? (
                orders.map((order, i) => (
                  <OrderCell
                    key={`${order.menuID}_${order.id}`}
                    data={order}
                    index={i}
                  />
                ))
              ) : (
                <tr>
                  <motion.td
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    ご注文がありません
                  </motion.td>
                </tr>
              )}
            </AnimatePresence>
          </motion.table>
        </AnimatePresence>
      </div>

      <div className={styles.bottomContainer}>
        <CommonButton
          title="注文を確定"
          subTitle="place order"
          color="enhanced"
          flexExpand
        />
      </div>
    </section>
  );
};

export default CheckoutPage;
