// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, onAddToCart, onUpdateQty, quantity = 0 }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.weight}</p>
      <p className="product-price">${product.price.toFixed(2)}</p>

      {quantity > 0 ? (
        <div className="qty-controls">
          <button className="qty-btn" onClick={() => onUpdateQty(product.id, quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button className="qty-btn" onClick={() => onUpdateQty(product.id, quantity + 1)}>+</button>
        </div>
      ) : (
        <button className="add-btn" onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
