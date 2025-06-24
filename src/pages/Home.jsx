<div style={{ display: 'grid', gridTemplateColumns: '250px 1fr 300px', gap: '20px', padding: '20px' }}>
  {/* Sidebar */}
  <Sidebar />

  {/* Main content */}
  <div>
    <HeroSection /> {/* “Groceries Delivered…” heading */}
    <Banner />
    <ProductGrid />
  </div>

  {/* Cart Popup */}
  <CartPopup />
</div>
