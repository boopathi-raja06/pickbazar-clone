
// src/components/CartPanel.jsx
import React from "react";

const CartPanel = ({ cartItems, onClose }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        right: 0,
        height: "100%",
        width: "300px",
        backgroundColor: "#fff",
        boxShadow: "-2px 0 5px rgba(0,0,0,0.1)",
        padding: "20px",
        zIndex: 9999,
        overflowY: "auto",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          fontSize: "20px",
          cursor: "pointer",
        }}
        title="Close"
      >
        ✖
      </button>

      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={{ marginBottom: "15px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
              <h4>{item.name}</h4>
              <p>
                {item.qty} × ₹{item.price.toFixed(2)}
              </p>
            </div>
          ))}
          <hr />
          <h3>Total: ₹{total.toFixed(2)}</h3>
          <button
            style={{
              background: "#0f9d58",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              width: "100%",
              marginTop: "20px",
              cursor: "pointer",
            }}
          >
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default CartPanel;
