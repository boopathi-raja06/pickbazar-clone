// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">🛒 PickBazar</div>
      <nav className="nav">
        <ul>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#offer">Offer</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#pages">Pages</a></li>
        </ul>
      </nav>
      <button className="join-btn">Join</button>
    </header>
  );
};

export default Header;
