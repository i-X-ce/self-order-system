import { AnimatePresence, motion } from "motion/react";
import { useOrder } from "../OrderProvider";
import { usePage } from "../PageProvider";
import styles from "./style.module.css";

const OrderButton = () => {
  const { orders, setOrders } = useOrder();
  const { page, setPage } = usePage();

  return (
    <AnimatePresence>
      {orders.length > 0 && page !== "checkout" && (
        <motion.button
          className={styles.button}
          onClick={() => {
            setPage("checkout");
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ type: "spring", stiffness: 100, damping: 10 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className={styles.bgCircle} />
          <div className={styles.textsContainer}>
            <div className={styles.texts}>
              <p className={styles.subTitle}>to order</p>
              <p className={styles.title}>ご注文へ</p>
            </div>
            <div className={styles.count}>{orders.length}</div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default OrderButton;
