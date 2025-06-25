// src/components/ProductCard.jsx
import React from 'react';

const ProductCard = ({ product, quantity, onAddToCart, onUpdateQty }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.weight}</p>
      <p>${product.price.toFixed(2)}</p>
      {quantity > 0 ? (
        <div className="cart-controls">
          <button onClick={() => onUpdateQty(product.id, 'decrement')}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onUpdateQty(product.id, 'increment')}>+</button>
        </div>
      ) : (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
