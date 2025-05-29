import { AnimatePresence } from "motion/react";
import "./App.css";
import OrderButton from "./components/common/OrderButton";
import { usePage } from "./components/common/PageProvider";
import CheckoutPage from "./pages/checkout";
import MenuPage from "./pages/menu";
import TopPage from "./pages/top";
import NavBar from "./components/common/NavBar";
import CheckinPage from "./pages/chckin";

function App() {
  const pageContext = usePage();
  const page = pageContext?.page;

  return (
    <>
      <div
        style={{
          color: "var(--color-text)",
          backgroundColor: "var(--color-background)",
          minHeight: "100vh",
        }}
      >
        <NavBar />
        <div style={{ position: "relative", top: 66.82 }}>
          <AnimatePresence mode="wait">
            {page === "home" && <TopPage key="home" />}
            {page === "menu" && <MenuPage key="menu" />}
            {page === "checkout" && <CheckoutPage key="checkout" />}
            {page === "checkin" && <CheckinPage key="checkin" />}
          </AnimatePresence>
          <OrderButton />
        </div>
      </div>
    </>
  );
}

export default App;
