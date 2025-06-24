import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  if (!product) return null; // Prevent crashing if undefined

  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: '10px',
      padding: '10px',
      textAlign: 'center',
      background: '#fff',
      boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
    }}>
      <img
        src={product.image}
        alt={product.name}
        style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h4 style={{ margin: '10px 0 5px' }}>{product.name}</h4>
      <p style={{ margin: '0', fontSize: '14px', color: '#888' }}>{product.weight}</p>
      <p style={{ fontWeight: 'bold', margin: '8px 0' }}>${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)} style={{
        background: '#0f9d58',
        color: 'white',
        border: 'none',
        padding: '8px 16px',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Cart
      </button>
    </div>
  );
};


export default ProductCard;
