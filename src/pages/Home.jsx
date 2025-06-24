import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductCard from '../components/ProductCard';
import CartPopup from '../components/CartPopup';
import Banner from '../components/Banner';
import { products } from '../data/products';

const Home = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);
    if (exists) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleCheckout = () => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    window.location.href = '/checkout';
  };

 return (
  <div>
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div style={{ flex: 1, padding: '20px' }}>
        
        {/* ✅ Banner goes here */}
        <Banner />

        {/* ✅ Product Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '20px',
          }}
        >
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>

      {/* Cart Popup */}
      <CartPopup cartItems={cartItems} onCheckout={handleCheckout} />
    </div>
  </div>
);

};

export default Home;
