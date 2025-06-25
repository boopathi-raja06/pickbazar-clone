// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import MainLayout from './components/MainLayout';
import Cart from './components/Cart';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const toggleCart = () => {
    setCartVisible(prev => !prev);
  };

  const addToCart = (product) => {
    const isInCart = cartItems.find(item => item.id === product.id);
    if (!isInCart) {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

const updateCartQuantity = (productId, action) => {
  setCartItems(prevItems =>
    prevItems.map(item =>
      item.id === productId
        ? {
            ...item,
            qty: action === 'increment' ? item.qty + 1 : Math.max(item.qty - 1, 1)
          }
        : item
    )
  );
};


  const handleCheckout = () => {
    alert('Checked out!');
    setCartItems([]);
    setCartVisible(false);
  };

  return (
    <div className="main-container">
      <Header />
      <Hero />
      <Banner />
      <MainLayout
        cartItems={cartItems}
        onAddToCart={addToCart}
        onUpdateQty={updateCartQuantity}
      />

      <button className="cart-button" onClick={toggleCart}>
        🛒
        {cartItems.length > 0 && (
          <span className="cart-count">{cartItems.length}</span>
        )}
      </button>

      {cartVisible && (
        <Cart
          items={cartItems}
          onUpdateQty={updateCartQuantity}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default App;
