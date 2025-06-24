import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card" style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'center' }}>
      <img src={product.image} alt={product.name} style={{ width: '100px', height: '100px' }} />
      <h4>{product.name}</h4>
      <p>{product.weight}</p>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)}>Cart</button>
    </div>
  );
};

export default ProductCard;
