// src/components/Header.jsx
import React from "react";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";

const Header = ({ cartCount, onCartToggle, isLoggedIn, username, onLoginClick }) => {
  return (
    <header className="header">
      <div className="logo">
        🛒 PickBazar
      </div>

      <nav className="nav-links">
        <a href="#">Home</a>
        <a href="#">Fruits</a>
        <a href="#">Vegetables</a>
        <a href="#">Grocery</a>
        <a href="#">Offers</a>
      </nav>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        {isLoggedIn ? (
          <div className="user-info" title={username} style={{ display: "flex", alignItems: "center", gap: "0.3rem", cursor: "default" }}>
            <FaUserCircle size={24} />
            <span>{username}</span>
          </div>
        ) : (
          <button className="join-btn" onClick={onLoginClick}>Login</button>
        )}
      </div>

      {/* Floating Cart Button */}
      <button className="cart-button" onClick={onCartToggle}>
        <FaShoppingCart />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </button>
    </header>
  );
};

export default Header;
