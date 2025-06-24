import React from 'react';
import Sidebar from './Sidebar';
import ProductList from './ProductCard';
import Cart from './Cart';

const MainLayout = () => {
  return (
    <div style={{
      display: 'flex',
      padding: '20px',
      gap: '20px'
    }}>
      <Sidebar />
      <ProductList />
      <Cart />
    </div>
  );
};

export default MainLayout;
