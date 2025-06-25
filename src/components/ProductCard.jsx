import React from "react";

const ProductCard = ({ product, onAddToCart, onUpdateQty, quantity }) => {
  const hasDiscount = product.discount && product.discount > 0;
  const discountedPrice = hasDiscount
    ? (product.price * (1 - product.discount)).toFixed(2)
    : product.price;

  return (
    <div className="product-card" style={{ position: "relative" }}>
      {hasDiscount && <div className="offer-badge">Offer</div>}

      <img src={product.image} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.weight}</p>

      <p>
        {hasDiscount ? (
          <>
            <span
              style={{
                textDecoration: "line-through",
                color: "#888",
                marginRight: "0.5rem"
              }}
            >
              ₹{product.price.toFixed(2)}
            </span>
            <span style={{ color: "green", fontWeight: "bold" }}>
              ₹{discountedPrice}
            </span>
          </>
        ) : (
          <span>₹{product.price.toFixed(2)}</span>
        )}
      </p>

      {quantity > 0 ? (
        <div className="cart-controls">
          <button onClick={() => onUpdateQty(product.id, quantity - 1)}>-</button>
          <span>{quantity}</span>
          <button onClick={() => onUpdateQty(product.id, quantity + 1)}>+</button>
        </div>
      ) : (
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
};

export default ProductCard;
