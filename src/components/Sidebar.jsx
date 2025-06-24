import React from 'react';

const Sidebar = () => {
  const categories = [
    'Fruits & Vegetables',
    'Meat & Fish',
    'Snacks',
    'Pet Care',
    'Home & Cleaning',
    'Dairy',
    'Cooking',
    'Breakfast',
    'Beverage',
    'Health & Beauty',
  ];

  return (
    <div style={{ width: '200px', padding: '20px', borderRight: '1px solid #ccc' }}>
      <h3>Categories</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {categories.map((cat) => (
          <li key={cat} style={{ margin: '10px 0' }}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
