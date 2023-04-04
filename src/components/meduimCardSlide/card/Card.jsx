import React, { useState } from "react";

import "./Card.scss";
function Card(props) {
  const [hover, setHover] = useState(false);
  const amountOfProduct = props.product.media.length;

  return (
    <div className="product-card">
      <img
        src={
          props.product.media[amountOfProduct === 2 ? (hover ? 1 : 0) : 0].url
        }
        alt="index"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      />
      <div
        className="quick-view"
        onMouseEnter={() => {
          setHover(true);
        }}
        onMouseLeave={() => {
          setHover(false);
        }}
      >
        {hover && <p>Quick View</p>}
      </div>
      <br />
      <p className="product-name">{props.product.name}</p>
      <p className="product-price">{props.product.price}₺</p>
      <button>Add to Cart</button>
    </div>
  );
}
export default Card;
