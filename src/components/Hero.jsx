import React from "react";

const Hero = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="hero">
      <h1>Welcome to PickBazar Grocery</h1>
      <input
        type="text"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Hero;
