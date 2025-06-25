// src/components/ProductCard.jsx
import React from "react";

const ProductCard = ({ product, onAddToCart, onUpdateQty, quantity }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.weight}</p>
      <p>₹{product.price.toFixed(2)}</p>

      {quantity === 0 ? (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      ) : (
        <div className="cart-controls">
          <button onClick={() => onUpdateQty(product.id, -1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onUpdateQty(product.id, 1)}>+</button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
