// src/components/Header.jsx
import React from "react";

const Header = ({ onCartToggle }) => {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "15px 30px",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #eee",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.05)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#0f9d58" }}>
        🛒 PickBazar
      </div>

      {/* Nav Links */}
      <nav>
        <ul style={{ listStyle: "none", display: "flex", gap: "25px", margin: 0, padding: 0 }}>
          <li><a href="#shop" style={navLinkStyle}>Shop</a></li>
          <li><a href="#offer" style={navLinkStyle}>Offer</a></li>
          <li><a href="#contact" style={navLinkStyle}>Contact</a></li>
          <li><a href="#pages" style={navLinkStyle}>Pages</a></li>
        </ul>
      </nav>

      {/* Cart Icon */}
      <button
        onClick={onCartToggle}
        style={{
          background: "transparent",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
        }}
        title="View Cart"
      >
        🛒
      </button>
    </header>
  );
};

const navLinkStyle = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "500",
};

export default Header;
