import React from "react";

const categories = [
  "Fruits & Vegetables",
  "Meat & Fish",
  "Snacks",
  "Pet Care",
  "Home & Cleaning",
  "Dairy",
  "Cooking",
  "Breakfast",
  "Beverage",
  "Health & Beauty"
];

const Sidebar = () => {
  return (
    <div style={{ width: "200px", marginRight: "20px" }}>
      <h4 style={{ fontWeight: "bold" }}>Categories</h4>
      <ul style={{ padding: 0, listStyle: "none" }}>
        {categories.map((cat, idx) => (
          <li key={idx} style={{ margin: "10px 0", color: "#333" }}>{cat}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
