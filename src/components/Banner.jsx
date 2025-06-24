import React from 'react';

const banners = [
  { image: '/banners/banner1.jpg', alt: 'Express Delivery' },
  { image: '/banners/banner2.jpg', alt: 'Cash On Delivery' },
  { image: '/banners/banner3.jpg', alt: 'Gift Voucher' },
];

const Banner = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      padding: '20px',
      backgroundColor: '#fff'
    }}>
      {banners.map((banner, index) => (
        <img
          key={index}
          src={banner.image}
          alt={banner.alt}
          style={{
            width: '300px',
            height: '120px',
            objectFit: 'cover',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        />
      ))}
    </div>
  );
};

export default Banner;
