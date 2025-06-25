import React from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';

const MainLayout = ({ onAddToCart, onUpdateQty, cartItems }) => {
  return (
    <div className="main-layout">
      <Sidebar />
      <ProductList
        onAddToCart={onAddToCart}
        onUpdateQty={onUpdateQty}
        cartItems={cartItems}
      />
    </div>
  );
};

export default MainLayout;
