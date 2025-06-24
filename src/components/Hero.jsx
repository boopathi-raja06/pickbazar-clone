// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <div
      style={{
        background: "#0f9d58",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>Welcome to PickBazar</h1>
      <p style={{ fontSize: "1.2rem" }}>Your fresh grocery store, delivered fast.</p>
    </div>
  );
};

export default Hero;
