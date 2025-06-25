// src/components/Sidebar.jsx
import React from "react";

const Sidebar = ({ onSelectCategory }) => {
  const categories = [
    "All",
    "Fruits",
    "Vegetables",
    "Dairy",
    "Snacks",
    "Meat & Fish",
    "Cooking",
    "Breakfast",
  ];

  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul>
        {categories.map((cat) => (
          <li
            key={cat}
            style={{ cursor: "pointer", marginBottom: "0.5rem" }}
            onClick={() => onSelectCategory(cat)}
          >
            {cat}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
