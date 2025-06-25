import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <span role="img" aria-label="cart">🛒</span>
        <span>PickBazar</span>
      </div>
      <nav className="nav-links">
        <a href="#">Shop</a>
        <a href="#">Offer</a>
        <a href="#">Contact</a>
        <a href="#">Pages</a>
      </nav>
      <button className="join-btn">Join</button>
    </header>
  );
};

export default Header;

