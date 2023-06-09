import { useState } from "react";
import { Link } from "react-router-dom";

import "./Footer.scss";

import facebook from "../../images/Icon/Social icons/facebook-svgrepo-com.svg";
import pinterest from "../../images/Icon/Social icons/pinterest-svgrepo-com.svg";
import instagram from "../../images/Icon/Social icons/instagram-svgrepo-com.svg";

function Footer() {
  const [focus, setFocus] = useState(false);
  const socialStyle = {
    height: 20,
    width: 20,
  };
  return (
    <>
      <div className="logo-brand">
        <h4>happy kids</h4>
      </div>

      <div className="footer-content">
        <div className="page">
          <ul>
            <li>
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/ShopCollection" className="link">
                Shop Collection
              </Link>
            </li>
            <li>
              <Link to="/OurStory" className="link">
                Our Story
              </Link>
            </li>
            <li>
              <Link to="/Contact" className="link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="social">
          <ul>
            <li>
              <a href="https://www.freecodecamp.org/" target="blank">
                <img src={facebook} alt="facebook" style={socialStyle}></img>
              </a>
            </li>
            <li>
              <a href="https://www.pinterest.com/" target="blank">
                <img src={pinterest} alt="pinterest" style={socialStyle}></img>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" target="blank">
                <img src={instagram} alt="instagram" style={socialStyle}></img>
              </a>
            </li>
          </ul>
        </div>
        <div className="other">
          <ul>
            <li>
              <Link to="/ShippingReturns" className="link">
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link to="/StorePolicy" className="link">
                Store Policy
              </Link>
            </li>
            <li>
              <Link to="/PaymentMethods" className="link">
                Payment Methods
              </Link>
            </li>
            <li>
              <Link to="/Faq" className="link">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="input-form">
        <p>Join Our Mailing List</p>
        <form>
          <input
            type="email"
            //  onChange={}
            onClick={() => setFocus(true)}
            placeholder="Enter your email here*"
            style={{
              border: focus ? "2px solid #ff4040" : "1px solid #282828",
            }}
            required
          />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>
    </>
  );
}
export default Footer;
