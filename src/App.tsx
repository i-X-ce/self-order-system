import "./App.css";
import OrderButton from "./components/common/OrderButton";
import { usePage } from "./components/common/PageProvider";
import CheckoutPage from "./pages/checkout";
import MenuPage from "./pages/menu";
import TopPage from "./pages/top";

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
        {page === "home" && <TopPage />}
        {page === "menu" && <MenuPage />}
        {page === "checkout" && <CheckoutPage />}
        <OrderButton />
      </div>
    </>
  );
}

export default App;
