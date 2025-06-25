// src/components/ProductList.jsx
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  products = [],
  searchTerm = "",
  onAddToCart = () => {},
  onUpdateQty = () => {},
  cartItems = [],
}) => {
  const filteredProducts = products.filter((product) =>
    product.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => {
          const cartItem = cartItems.find((item) => item.id === product.id);
          return (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onUpdateQty={onUpdateQty}
              quantity={cartItem?.qty || 0}
            />
          );
        })
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;
