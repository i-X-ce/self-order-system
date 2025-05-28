import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import PageProvider from "./components/common/PageProvider/index.tsx";
import OrderProvider from "./components/common/OrderProvider/index.tsx";
import SubMenuProvider from "./components/common/SubMenuProvider/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <SubMenuProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </SubMenuProvider>
    </PageProvider>
  </StrictMode>
);
