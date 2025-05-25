import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PageProvider from "./components/common/PageProvider/index.tsx";
import OrderProvider from "./components/common/OrderProvider/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <OrderProvider>
        <App />
      </OrderProvider>
    </PageProvider>
  </StrictMode>
);
