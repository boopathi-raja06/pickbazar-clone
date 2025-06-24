import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import CartPanel from "./components/CartPanel"; // ✅

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // ✅

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#f5f5f5" }}>
      <Header onCartToggle={() => setIsCartOpen(true)} />
      <Hero />
      <Banner />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "200px 1fr",
          gap: "20px",
          padding: "20px",
        }}
      >
        <Sidebar />
        <ProductList onAddToCart={handleAddToCart} />
      </div>

      {/* Floating Cart Panel */}
      {isCartOpen && (
        <CartPanel
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
