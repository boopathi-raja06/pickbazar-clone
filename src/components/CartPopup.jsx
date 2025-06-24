import React from 'react';

const CartPopup = ({ cartItems }) => (
  <div style={{ padding: '20px', background: '#f9f9f9' }}>
    <h3>Cart</h3>
    {cartItems.length === 0 ? (
      <p>No items in cart</p>
    ) : (
      cartItems.map(item => (
        <div key={item.id}>
          {item.name} - {item.quantity} x ${item.price.toFixed(2)}
        </div>
      ))
    )}
  </div>
);

export default CartPopup;
