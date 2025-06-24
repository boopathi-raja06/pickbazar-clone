// src/components/Header.jsx
import React from "react";

const Header = () => {
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
        zIndex: 100
      }}
    >
      <div style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#0f9d58" }}>
        🛒 PickBazar
      </div>

      <button
        style={{
          background: "#0f9d58",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "14px"
        }}
      >
        Cart
      </button>
    </header>
  );
};

export default Header;
