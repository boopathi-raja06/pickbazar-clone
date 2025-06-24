// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div style={{ padding: "10px", border: "1px solid #ccc", borderRadius: "10px", textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
      <h3>{product.name}</h3>
      <p>{product.weight}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)} style={{ background: "#0f9d58", color: "#fff", border: "none", padding: "8px", cursor: "pointer", borderRadius: "5px" }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
