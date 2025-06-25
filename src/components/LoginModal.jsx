// src/components/LoginModal.jsx
import React, { useState } from "react";
import "../App.css"; // Optional: create for styling

const LoginModal = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      onLogin(username);
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <button onClick={onClose} className="close-btn">✖</button>
      </div>
    </div>
  );
};

export default LoginModal;
