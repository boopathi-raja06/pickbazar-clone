import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import CartPopup from '../components/CartPopup';
import { products } from '../data/products';
import Banner from '../components/Banner';


const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const handleCheckout = () => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  window.location.href = '/checkout';
};


  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />

      <div style={{ flex: 1, padding: '20px' }}>
        <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>

      <CartPopup cartItems={cartItems} onCheckout={handleCheckout} />
    </div>
  );
};

export default Home;
