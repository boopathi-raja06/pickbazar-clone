// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

const ProductList = ({ onAddToCart }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "20px" }}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
