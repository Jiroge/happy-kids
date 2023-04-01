import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

import cart from "../../images/Icon/cart-svgrepo-com.svg";
import user from "../../images/Icon/user-svgrepo-com.svg";
function Navbar() {
  const iconStyle = {
    height: 20,
    width: 20,
  };
  return (
    <>
      <div className="topbar">
        <p>Get 10% Off - Use Coupon Code HAPPY123</p>
        <p>Free Shipping Over $50</p>
      </div>

      <div className="brand">
        <h4>happy kids</h4>
      </div>

      <div className="navbar">
        <div className="menu-icon hidden">
          <div className="icons">
            <img src={user} alt="user" style={iconStyle} />
            <p>Log Ln</p>
          </div>
          <div className="icons">
            <img src={cart} alt="cart" style={iconStyle} />
            <p>0</p>
          </div>
        </div>
        <div className="menu-text">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link className="link">Shop Collection</Link>
            </li>
            <li>
              <Link className="link">Our Story</Link>
            </li>
            <li>
              <Link className="link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="menu-icon">
          <div className="icons">
            <img src={user} alt="user" style={iconStyle} />
            <p>Log In</p>
          </div>
          <div className="icons">
            <img src={cart} alt="cart" style={iconStyle} />
            <p className="count-order">0</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
