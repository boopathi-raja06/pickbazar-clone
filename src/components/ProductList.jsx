// src/components/ProductList.jsx
import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const ProductList = ({ onAddToCart, onUpdateQty, cartItems, selectedCategory, searchTerm }) => {
  // Filter based on category
  const filteredByCategory = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  // Further filter by search term
  const filteredProducts = filteredByCategory.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts && filteredProducts.length > 0 ? (
        filteredProducts.map(product => {
          const cartItem = cartItems.find(item => item.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onUpdateQty={onUpdateQty}
              quantity={cartItem?.qty || 0}
            />
          );
        })
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
