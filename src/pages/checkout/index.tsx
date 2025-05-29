import React from "react";
import styles from "./style.module.css";
import OrderCell from "../../components/checkout/OrderCell";
import { useOrder } from "../../components/common/OrderProvider";
import CommonButton from "../../components/common/CommonButton";
import { AnimatePresence, motion } from "motion/react";
import MenuTitle from "../../components/menu/MenuTitle";
import Modal from "../../components/common/Modal";
import { usePage } from "../../components/common/PageProvider";
import { MenuRecord } from "../../utils/menu";

const CheckoutPage = () => {
  const { page: _, setPage } = usePage();
  const { orders, setOrders } = useOrder();
  const [openModal, setOpenModal] = React.useState(false);
  const [openSuccessModal, setOpenSuccessModal] = React.useState(false);
  const totalPrice = orders.reduce((total, order) => {
    const menu = order.menuID ? MenuRecord[order.menuID] : null;
    return total + (menu ? menu.price * order.count : 0);
  }, 0);

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 200 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 200 }}
    >
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
                    delay={i * 0.1}
                  />
                ))
              ) : (
                <tr>
                  <motion.td
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
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
        <p style={{ fontSize: "3rem", marginTop: "1rem", textAlign: "right" }}>
          <span style={{ fontSize: "2rem" }}>合計金額: </span>
          {totalPrice}
          <span style={{ fontSize: "1.5rem" }}> 円</span>
        </p>
        <CommonButton
          title="ご注文を確定"
          subTitle="place order"
          color="enhanced"
          flexExpand
          disabled={orders.length === 0}
          onClick={() => {
            setOpenModal(true);
          }}
        />
      </div>

      {/* 注文確定モーダル */}
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalTopContainer}>
            <h2 className={styles.modalTitle}>ご注文の確定</h2>
            <p className={styles.modalDescription}>
              ご注文を確定します。
              <br />
              ご注文をよく確認の上、確定ボタンを押してください。
            </p>
          </div>

          <div className={styles.modalButtonContainer}>
            <CommonButton
              title="キャンセル"
              color="error"
              size="medium"
              className={styles.modalButton}
              onClick={() => {
                setOpenModal(false);
              }}
            />
            <CommonButton
              title="確定"
              color="enhanced"
              className={styles.modalButton}
              size="medium"
              onClick={() => {
                // 注文確定の処理をここに追加
                setOrders([]);
                setOpenModal(false);
                setOpenSuccessModal(true);
              }}
            />
          </div>
        </div>
      </Modal>

      {/* 注文成功モーダル */}
      <Modal
        open={openSuccessModal}
        onClose={() => {
          setOpenModal(false);
        }}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalTopContainer}>
            <h2 className={styles.modalTitle}>ご注文ありがとうございます</h2>
            <p className={styles.modalDescription}>
              ご注文を承りました。
              <br />
              ご用意ができ次第、お席までお持ちします。お席に届くまで少々お待ちください...。
            </p>
          </div>

          <div className={styles.modalButtonContainer}>
            <CommonButton
              title="OK"
              color="enhanced"
              className={styles.modalButton}
              size="medium"
              onClick={() => {
                // 注文確定の処理をここに追加
                setOpenSuccessModal(false);
                setPage("home");
              }}
            />
          </div>
        </div>
      </Modal>
    </motion.div>
  );
};

export default CheckoutPage;
