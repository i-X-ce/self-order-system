import React, { createContext, useContext, type ReactNode } from "react";
import type { MenuID } from "../../../utils/menu";

export type OrderType = { id: MenuID; count: number };

type OrderContextType = {
  orders: OrderType[];
  setOrders: React.Dispatch<React.SetStateAction<OrderType[]>>;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = React.useState<OrderType[]>([]);

  return (
    <OrderContext.Provider value={{ orders, setOrders }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderProvider;

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context)
    throw new Error("useOrder must be used within an OrderProvider");
  return context;
}
