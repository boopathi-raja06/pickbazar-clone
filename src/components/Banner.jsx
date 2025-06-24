import React from 'react';

const banners = [
  '/assets/banner1.jpg',
  '/assets/banner2.jpg',
  '/assets/banner3.jpg',
];

const banner = () => {
  return (
    
    <div style={{ display: 'flex', gap: '10px', overflowX: 'auto', marginBottom: '20px' }}>
        <div style={{ flex: 1, padding: '20px' }}>
  <BannerSlider />

  <div className="product-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
    ))}
  </div>
</div>

      {banners.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Banner ${index + 1}`}
          style={{ width: '100%', maxWidth: '600px', borderRadius: '10px' }}
        />
      ))}
    </div>
  );
};

export default banner;
