// src/components/ProductList.jsx
import React from 'react';
import products from '../data/products';
import ProductCard from './ProductCard';

const ProductList = ({ onAddToCart, onUpdateQty, cartItems = [] }) => {
  return (
    <div className="product-list">
      {products.map(product => {
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
      })}
    </div>
  );
};

export default ProductList;
