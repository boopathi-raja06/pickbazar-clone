import React from 'react';

const banners = [
  '/assets/banner1.jpg',
  '/assets/banner2.jpg',
  '/assets/banner3.jpg',
];

const Banner = () => {
  return (
    <div style={{ display: 'flex', gap: '15px', overflowX: 'auto', marginBottom: '30px' }}>
        
      {banners.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          style={{
            width: '100%',
            maxWidth: '600px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '10px',
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
};

export default Banner;
