import React from "react";
import { useCart } from "../cart/CartProvider";
import './Header.css';
import logo from './logo.png';
import cartIcon from './cart.png';

function Header() {
  const { cart, openCart } = useCart();

  return (
    <header className="header">
      <div className="header-top">
        <div className="location">
          <i className="fas fa-map-marker-alt"></i> Ranighat, Birgunj, Nepal
        </div>
        <div className="contacts">
          <span>📞 9826240640 / 9811247030</span>
          <span>✉️ info@sahmeds.com</span>
        </div>
      </div>
      <div className="header-bottom">
        <img src={logo} alt="MobiMeds Logo" className="logo" />

        <div className="search-container">
          <input type="text" placeholder="Search Medicine / Health Products" className="search-input" />
          <button className="btn-search">Search</button>
        </div>

        <label htmlFor="upload-prescription" className="btn-prescription">Upload Prescription</label>
        <input
          type="file"
          id="upload-prescription"
          name="prescription"
          accept=".pdf, .doc, .jpg, .png"
          style={{ display: 'none' }}
        />

        <button className="btn-signup">Sign Up</button>
        <button className="btn-login">Log In</button>

        <div className="cart-icon" onClick={openCart}>
          <img src={cartIcon} alt="Cart" />
          <span className="cart-count">{cart.length}</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
