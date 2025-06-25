// src/components/CartPanel.jsx
import React from 'react';

const CartPanel = ({ cartItems, onClose, onCheckout, onUpdateQty }) => {
  return (
    <div className="cart-panel">
      <button className="cart-close-btn" onClick={onClose}>✖</button>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id}>
            <p><strong>{item.name}</strong></p>
            <div className="qty-controls">
              <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.qty - 1)}>-</button>
              <span>{item.qty}</span>
              <button className="qty-btn" onClick={() => onUpdateQty(item.id, item.qty + 1)}>+</button>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
      )}
    </div>
  );
};

export default CartPanel;
