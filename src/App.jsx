// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Banner from './components/Banner';
import Sidebar from './components/Sidebar';
import ProductList from './components/ProductList';
import CartPanel from './components/CartPanel';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const handleUpdateQty = (id, qty) => {
    if (qty <= 0) {
      setCartItems(cartItems.filter((item) => item.id !== id));
    } else {
      setCartItems(cartItems.map((item) =>
        item.id === id ? { ...item, qty } : item
      ));
    }
  };

  const handleCheckout = () => {
    alert('Checked out!');
    setCartItems([]);
    setIsCartOpen(false);
  };

  return (
    <div>
      <Header />
      <Hero />
      <Banner />

      <div className="container">
        <div className="grid-layout">
          <Sidebar />
          <ProductList
            onAddToCart={handleAddToCart}
            onUpdateQty={handleUpdateQty}
            cartItems={cartItems}
          />
        </div>
      </div>

      {/* Floating Cart Button */}
      <button className="floating-cart" onClick={() => setIsCartOpen(true)}>
        🛒
        {cartItems.length > 0 && (
          <span className="cart-badge">
            {cartItems.reduce((total, item) => total + item.qty, 0)}
          </span>
        )}
      </button>

      {isCartOpen && (
        <CartPanel
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onCheckout={handleCheckout}
          onUpdateQty={handleUpdateQty}
        />
      )}
    </div>
  );
}

export default App;
