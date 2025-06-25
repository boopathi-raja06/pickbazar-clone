import React from "react";

const CartPopup = ({ cartItems, onUpdateQty }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-popup">
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "1rem" }}>
              <div>
                <strong>{item.name}</strong> - ₹{item.price} x {item.qty}
              </div>
              <div>
                <button onClick={() => onUpdateQty(item.id, -1)}>-</button>
                <button onClick={() => onUpdateQty(item.id, 1)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      {cartItems.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <p>Total: ₹{total.toFixed(2)}</p>
          <button style={{ marginTop: "0.5rem" }}>Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartPopup;
