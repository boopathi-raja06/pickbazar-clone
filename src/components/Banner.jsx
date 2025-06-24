// src/components/Banner.jsx
import React from "react";
import banners from "../data/banners"; // Array of banner objects

const Banner = () => {
  return (
    <div
      style={{
        display: "flex",
        overflowX: "auto",
        padding: "20px",
        gap: "20px",
        background: "#f7f7f7"
      }}
    >
      {banners.map((banner) => (
        <img
          key={banner.id}
          src={banner.image}
          alt={banner.title}
          style={{
            width: "300px",
            height: "100px",
            borderRadius: "10px",
            objectFit: "cover"
          }}
        />
      ))}
    </div>
  );
};

export default Banner;
