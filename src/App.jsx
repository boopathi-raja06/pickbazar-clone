// src/App.jsx
import React, { useState } from "react";
import LoginModal from "./components/LoginModal";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Banner from "./components/Banner";
import MainLayout from "./components/MainLayout";
import CartPopup from "./components/CartPopup";

import "./App.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showLogin, setShowLogin] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  
  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUsername(username);
    setLoginModalOpen(false); // close modal after login
  };

  const handleLoginClick = () => setLoginModalOpen(true);

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        return [...prev, { ...product, qty: 1 }];
      }
    });
  };
  const clearCart = () => {
  setCartItems([]);
};
const handleCartToggle = () => {
  setShowCart(prev => !prev);
};


  const handleUpdateQty = (productId, amount) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, qty: item.qty + amount } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const cartProductCount = cartItems.length;

  return (
    <div>
      <Header
        cartCount={cartProductCount}
        onCartToggle={toggleCart}
        isLoggedIn={isLoggedIn}
        username={username}
        onLoginClick={handleLoginClick}
      />

      <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Banner />
      <MainLayout
        searchTerm={searchTerm}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onAddToCart={handleAddToCart}
        onUpdateQty={handleUpdateQty}
        cartItems={cartItems}
      />

     {showCart && (
  <CartPopup
    cartItems={cartItems}
    onUpdateQty={handleUpdateQty}
    onClose={handleCartToggle}
    clearCart={clearCart}
  />
)}


      

      {/* Only show LoginModal when needed */}
      {isLoginModalOpen && (
        <LoginModal
          onClose={() => setLoginModalOpen(false)}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
};

export default App;
