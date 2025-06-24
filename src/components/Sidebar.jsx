import React from 'react';

const categories = [
  'Fruits & Vegetables', 'Meat & Fish', 'Snacks', 'Pet Care', 'Home & Cleaning',
  'Dairy', 'Cooking', 'Breakfast', 'Beverage', 'Health & Beauty'
];

const Sidebar = () => (
  <div style={{ padding: '20px' }}>
    <h3 style={{ marginBottom: '15px' }}>Categories</h3>
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {categories.map((cat, i) => (
        <li key={i} style={{ marginBottom: '10px', cursor: 'pointer', color: '#333' }}>{cat}</li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
