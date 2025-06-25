// src/components/Cart.jsx
import React from 'react';

const Cart = ({ items, onUpdateQty, onCheckout }) => {
  const totalAmount = items.reduce((total, item) => total + item.qty * item.price, 0);

  return (
    <div className="cart-popup">
      <h3>Your Cart</h3>
      {items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        items.map(item => (
          <div key={item.id} className="cart-item">
            <span style={{ flex: 2 }}>{item.name}</span>
            <span style={{ flex: 1 }}>₹{item.price.toFixed(2)}</span>
            <div className="cart-controls" style={{ flex: 1 }}>
              <button onClick={() => onUpdateQty(item.id, 'decrement')}>-</button>
              <span>{item.qty}</span>
              <button onClick={() => onUpdateQty(item.id, 'increment')}>+</button>
            </div>
            <span style={{ flex: 1 }}>₹{(item.price * item.qty).toFixed(2)}</span>
          </div>
        ))
      )}

      {items.length > 0 && (
        <>
          <hr style={{ margin: '1rem 0' }} />
          <p><strong>Total: ₹{totalAmount.toFixed(2)}</strong></p>
          <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default Cart;
