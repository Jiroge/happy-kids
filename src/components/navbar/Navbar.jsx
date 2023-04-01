import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      <div className="topbar">
        <p>Get 10% Off - Use Coupon Code HAPPY123</p>
        <p>Free Shipping Over $50</p>
      </div>

      <div className="brand">
        <h1>happy kids</h1>
      </div>

      <div className="navbar">
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
            <div>

            </div>
            <div>
                
            </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
