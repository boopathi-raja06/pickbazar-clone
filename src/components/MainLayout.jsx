import React from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import Cart from "./Cart";

const MainLayout = ({ cartItems, onAddToCart }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 300px", gap: "20px", padding: "20px" }}>
      <Sidebar />
      <ProductList onAddToCart={onAddToCart} />
      <Cart cartItems={cartItems} />
    </div>
  );
};

export default MainLayout;
