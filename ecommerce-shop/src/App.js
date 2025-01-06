import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

// Layout Component
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar /> {/* Navbar */}
      <div style={{ paddingTop: "80px" }}>{children}</div> {/* Content with padding */}
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
    <Router>
      <Layout> {/* Wrap Routes inside Layout to ensure padding */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<CartPage />} /> {/* Cart Page Route */}
        </Routes>
      </Layout>
      </Router>
      </CartProvider>
  );
};

export default App;
