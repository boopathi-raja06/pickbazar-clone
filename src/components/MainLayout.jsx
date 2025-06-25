import React from "react";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";

import productsData from "../data/products";

const MainLayout = ({
  searchTerm,
  selectedCategory,
  onSelectCategory,
  onAddToCart,
  onUpdateQty,
  cartItems,
}) => {
  // Filter by category if selected
  const filteredByCategory = selectedCategory === "All"
    ? productsData
    : productsData.filter(product => product.category === selectedCategory);

  return (
    <div className="main-layout" style={{ display: "flex" }}>
      {/* Sidebar */}
      <Sidebar onSelectCategory={onSelectCategory} />

      {/* Product List */}
      <div style={{ flex: 1, padding: "1rem" }}>
        <ProductList
          products={filteredByCategory}
          searchTerm={searchTerm}
          onAddToCart={onAddToCart}
          onUpdateQty={onUpdateQty}
          cartItems={cartItems}
        />
      </div>
    </div>
  );
};

export default MainLayout;
