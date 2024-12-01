// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Importing the CSS for the Header component

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="logo-container">
          <h1 className="logo">Green Paradise Plants</h1>
        </div>
        <ul className="nav-links">
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/products">Products</Link></li>
          <li><Link className="nav-link" to="/cart">Cart</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
