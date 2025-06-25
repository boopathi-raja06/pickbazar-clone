// src/components/Cart.jsx
import React from "react";

const Cart = ({ cartItems, onUpdateQty, onCheckout }) => {
  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-popup">
      <h3>Your Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <span>{item.name}</span>
              <div className="cart-controls">
                <button onClick={() => onUpdateQty(item.id, -1)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => onUpdateQty(item.id, 1)}>+</button>
              </div>
              <span>₹{(item.price * item.qty).toFixed(2)}</span>
            </div>
          ))}
          <hr />
          <p><strong>Total:</strong> ₹{totalAmount.toFixed(2)}</p>
          <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
