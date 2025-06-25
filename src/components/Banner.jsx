// src/components/Banner.jsx
import React from 'react';
import banners from '../data/banners';

const Banner = () => {
  return (
    <div className="banner-container">
      {banners.map((banner, index) => (
        <img className="banner-img" src={banner.image} alt={`Banner ${index}`} key={index} />
      ))}
    </div>
  );
};

export default Banner;
