import React from "react";
import styles from "./style.module.css";
import OrderCell from "../../components/checkout/OrderCell";
import { useOrder } from "../../components/common/OrderProvider";

const CheckoutPage = () => {
  const { orders, setOrders } = useOrder();

  return (
    <div>
      <p>お会計</p>
      <table className={styles.table}>
        <tr>
          <th style={{ width: "40%" }}>商品</th>
          <th>価格</th>
          <th>数量</th>
          <th>小計</th>
          <th></th>
        </tr>
        {orders.map((order, i) => (
          <OrderCell key={`${i}_${order.id}`} data={order} />
        ))}
      </table>
    </div>
  );
};

export default CheckoutPage;
