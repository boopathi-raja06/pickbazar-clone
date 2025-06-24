import React from 'react';

const CartPopup = ({ cartItems, onCheckout }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{
      width: '300px',
      padding: '20px',
      borderLeft: '1px solid #ccc',
      background: '#f9f9f9',
      height: '100vh',
      position: 'sticky',
      top: 0
    }}>
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul style={{ padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                {item.name} × {item.quantity} — ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
          <hr />
          <p>Total: <strong>${total.toFixed(2)}</strong></p>
          <button onClick={onCheckout}>Checkout</button>
        </>
      )}
    </div>
  );
};

export default CartPopup;
