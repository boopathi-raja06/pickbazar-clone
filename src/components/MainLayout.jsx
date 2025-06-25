// src/components/MainLayout.jsx
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductList';

const MainLayout = ({ cartItems, onAddToCart, onUpdateQty }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="main-layout">
      <Sidebar onSelectCategory={setSelectedCategory} />
      <ProductList
        cartItems={cartItems}
        onAddToCart={onAddToCart}
        onUpdateQty={onUpdateQty}
        selectedCategory={selectedCategory}
      />
    </div>
  );
};

export default MainLayout;
