// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        background: "#0f9d58",
        color: "white",
        padding: "60px 20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        Welcome to PickBazar
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        Your fresh grocery store, delivered fast.
      </p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search for products..."
        style={{
          padding: "12px 20px",
          width: "100%",
          maxWidth: "500px",
          borderRadius: "30px",
          border: "none",
          outline: "none",
          fontSize: "1rem",
        }}
      />
    </div>
  );
};

export default Hero;
