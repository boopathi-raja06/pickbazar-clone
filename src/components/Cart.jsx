// src/components/Cart.jsx
import React from "react";

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2);

  return (
    <div style={{ width: "300px", background: "#f9f9f9", padding: "20px", borderRadius: "10px" }}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} × {item.qty} = ${(item.qty * item.price).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total}</h3>
    </div>
  );
};

export default Cart;
