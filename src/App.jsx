// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Sidebar from "./components/Sidebar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showCart, setShowCart] = useState(false);

  // Toggle cart display
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  // Add product to cart
  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, qty: 1 }];
      }
    });
  };

  // Update quantity
  const handleUpdateQty = (productId, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty + delta } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  // Checkout
  const handleCheckout = () => {
    setShowCart(false);
    alert("Checked out successfully!");
    setCartItems([]);
  };

  return (
    <>
      {/* Header and Navigation */}
      <Header />

      {/* Hero Section with Search */}
      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* Banner Images */}
      <Banner />

      {/* Main Layout */}
      <div className="main-container">
        <div className="main-layout">
          <Sidebar onSelectCategory={setSelectedCategory} />
          <ProductList
            onAddToCart={handleAddToCart}
            onUpdateQty={handleUpdateQty}
            cartItems={cartItems}
            selectedCategory={selectedCategory}
            searchTerm={searchTerm}
          />
        </div>
      </div>

      {/* Cart Button */}
      <button className="cart-button" onClick={toggleCart}>
        🛒
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </button>

      {/* Cart Popup */}
      {showCart && (
        <Cart
          cartItems={cartItems}
          onUpdateQty={handleUpdateQty}
          onCheckout={handleCheckout}
        />
      )}
    </>
  );
}

export default App;
