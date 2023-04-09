import { useState } from "react";
import { AiOutlineRight } from "react-icons/ai";

import "./AddToCart.scss";
function AddToCart(props) {
  const data = JSON.parse(sessionStorage.getItem("dataArray"));
  const total = data.reduce((total, current) => total + current.selectPrice, 0);

  const [cartProduct, setCartProduct] = useState(data);

  const handleClick = () => {
    props.closeCart(false);
  };
  const handleQuantity = (symbol, clickIndex) => {
    if (symbol === "plus") {
      const updatedArray = cartProduct.map((item, index) => {
        if (index === clickIndex) {
          const plus = parseInt(item.selectQuantity) + 1;
          return { ...item, selectQuantity: plus };
        }
        return item;
      });
      setCartProduct(updatedArray);
    } else {
      const updatedArray = cartProduct.map((item, index) => {
        if (index === clickIndex) {
          const plus = parseInt(item.selectQuantity) - 1;
          return { ...item, selectQuantity: plus };
        }
        return item;
      });
      setCartProduct(updatedArray);
    }
  };

  const handleInputChange = (e, changeIndex) => {
    const updatedArray = cartProduct.map((item, index) => {
      if (index === changeIndex) {
        return { ...item, selectQuantity: e.target.value };
      }
      return item;
    });
    setCartProduct(updatedArray);
  };

  const handleDateleSession = (name) => {
    const existingData = JSON.parse(sessionStorage.getItem("dataArray")) || [];
    const newData = existingData.filter((item) => item.selectSku !== name);
    sessionStorage.setItem("dataArray", JSON.stringify(newData));
  };

  return (
    <div className="cart-container">
      <div className="background" onClick={handleClick}></div>
      <div className="cart">
        <div className="head">
          <AiOutlineRight
            onClick={handleClick}
            size={25}
            style={{
              fill: "white",
              position: "fixed",
              marginTop: "20px",
              marginLeft: "30px",
              cursor: "pointer",
            }}
          />
          <p>Cart</p>
        </div>
        <div className="body">
          {cartProduct[0] ? (
            <div className="cart-list-container">
              <div className="container">
                {cartProduct.map((product, index) => (
                  <div key={index} className="cart-list">
                    <img
                      src={product.selectImage}
                      alt={`${index}+selectImage`}
                    />
                    <div>
                      <p>{product.selectName}</p>
                      <p>₺{product.selectPrice}</p>
                      <div className="quantity">
                        <button
                          className={
                            product.selectQuantity <= 0
                              ? "disabled"
                              : "minus-btn"
                          }
                          type="button"
                          onClick={() => handleQuantity("minus", index)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          value={product.selectQuantity}
                          onChange={(e) => handleInputChange(e, index)}
                          min="0"
                          max="10"
                          step="1"
                        />
                        <button
                          className="plus-btn"
                          type="button"
                          onClick={() => handleQuantity("plus", index)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p
                      onClick={() => handleDateleSession(product.selectSku)}
                      className="remove-list"
                    >
                      x
                    </p>
                  </div>
                ))}
              </div>
              <div className="total">
                <p>Subtotal</p>
                <p>{total}₺</p>
              </div>
              <button className="view-cart">View Cart</button>
            </div>
          ) : (
            <p>No product</p>
          )}
        </div>
      </div>
    </div>
  );
}
export default AddToCart;
