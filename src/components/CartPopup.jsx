// src/components/CartPopup.jsx
import React, { useState } from "react";
import CheckoutModal from "./CheckoutModal";

const CartPopup = ({ cartItems, onUpdateQty, onClose, clearCart }) => {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  return (
    <div className="cart-popup">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cartItems.map((item) => (
          <div className="cart-item" key={item.id}>
            <span>{item.name}</span>
            <div className="cart-controls">
              <button onClick={() => onUpdateQty(item.id, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={handleCheckout}>
          Checkout
        </button>
      )}
      {showCheckout && (
        <CheckoutModal
          onClose={() => {
            setShowCheckout(false);
            onClose(); // close cart popup
          }}
          clearCart={clearCart}
        />
      )}
    </div>
  );
};

export default CartPopup;
