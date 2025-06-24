import React from 'react';

const HeroSection = () => (
  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
    <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>Groceries Delivered in 90 Minute</h1>
    <p style={{ marginTop: '8px', color: '#555' }}>
      Get your healthy foods & snacks delivered at your doorsteps all day everyday
    </p>
    <input
      type="text"
      placeholder="Search your products from here"
      style={{
        marginTop: '16px',
        padding: '10px 16px',
        width: '60%',
        borderRadius: '5px',
        border: '1px solid #ddd'
      }}
    />
  </div>
);

export default HeroSection;
