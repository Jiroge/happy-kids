import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";
import SignUp from "../signUp/SignUp"
import AddToCart from "../../components/addToCart/AddToCart"

import cart from "../../images/Icon/cart-svgrepo-com.svg";
import user from "../../images/Icon/user-svgrepo-com.svg";

function Navbar(props) {
  const [newText, setNewText] = useState("Free Shipping Over $50");
  const [currentObjectIndex, setCurrentObjectIndex] = useState(0);
  const [showLogIn, setShowLogIn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  // const [selectProduct, setSelectProduct] = useState({});

  const iconStyle = {
    height: 20,
    width: 20,
  };

  const text = [
    "Get 10% Off - Use Coupon Code HAPPY123",
    "Free Shipping Over $50",
  ];

  // useEffect(() => {
  //   const select = props.select
  //   const checkProps = () => {
  //     if (props) {
  //       if (props.select.selectColor & props.select.selectSize & props.select.selectQuantity) {
  //         console.log("Navbar already selected")
  //         setSelectProduct(select)
  //       } else {
  //         setSelectProduct(select)
  //         console.log("Navbar selected", select)
  //         // console.log("Navbar not selected")
  //       }
  //     } else {
  //       console.log("no props")
  //     }
  //   }
  //   checkProps()
  // }, [props])


  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentObjectIndex < text.length - 1) {
        setNewText(text[currentObjectIndex + 1])
        setCurrentObjectIndex(currentObjectIndex + 1);
      } else {
        setNewText(text[0])
        setCurrentObjectIndex(0);
      }
    }, 5000);

    return () => clearInterval(intervalId);
  });

  return (
    <>
      <div className="topbar">
        <p>{newText}</p>
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
              <Link to="/ShopCollection" className="link">Shop Collection</Link>
            </li>
            <li>
              <Link to="/OurStory" className="link">Our Story</Link>
            </li>
            <li>
              <Link to="/Contact" className="link">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="menu-icon">
          <div className="icons" onClick={() => setShowLogIn(true)}>
            <img src={user} alt="user" style={iconStyle} />
            <p>Log In</p>
          </div>
          <div className="icons" onClick={() => setShowCart(true)}>
            <img src={cart} alt="cart" style={iconStyle} />
            <p className="count-order">0</p>
          </div>
        </div>
      </div>
      {showLogIn && <SignUp closeSigUp={(event) => {
        setShowLogIn(event)
      }} />}
      {showCart && <AddToCart
        closeCart={(event) => {
          setShowCart(event)
        }} />}
    </>
  );
}

export default Navbar;
