import React, { useEffect, useState } from 'react';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedItems = localStorage.getItem('cartItems');
    if (storedItems) {
      setCartItems(JSON.parse(storedItems));
    }
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '40px' }}>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul style={{ padding: 0 }}>
            {cartItems.map((item) => (
              <li key={item.id} style={{ marginBottom: '10px' }}>
                {item.name} ({item.weight}) × {item.quantity} — ${(
                  item.price * item.quantity
                ).toFixed(2)}
              </li>
            ))}
          </ul>
          <hr />
          <p>Total: <strong>${total.toFixed(2)}</strong></p>
          <button onClick={() => alert('Order placed!')}>Place Order</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
