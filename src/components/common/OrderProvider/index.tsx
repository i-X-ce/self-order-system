import React, { createContext, useContext, type ReactNode } from "react";

type OrderContextType = {
  orders: string[];
  setOrders: React.Dispatch<React.SetStateAction<string[]>>;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orders, setOrders] = React.useState<string[]>([]);

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
