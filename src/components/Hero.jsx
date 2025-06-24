import React from 'react';

const Hero = () => {
  return (
    <div style={{
      width: '100%',
      background: '#f9f9f9',
      padding: '40px 0',
      textAlign: 'center',
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '10px' }}>Groceries Delivered in 90 Minute</h1>
      <p style={{ color: '#555' }}>
        Get your healthy foods & snacks delivered at your doorsteps all day everyday
      </p>
      <input
        type="text"
        placeholder="Search your products from here"
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '8px'
        }}
      />
    </div>
  );
};

export default Hero;
