import { useState } from "react";
import { Link } from "react-router-dom";

import "./CollectionCard.scss";
function CollectionCard(props) {
  const [hover, setHover] = useState(false);
  const amountOfProduct = props.product.media.length;
  return (
    <div className="product-card">
      <Link to="/ProductDetail" state={{ product: props.product }}>
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
      </Link>
      <br />
      <p className="product-name">{props.product.name}</p>
      <p className="product-price">{props.product.price}₺</p>
      <button>Add to Cart</button>
    </div>
  );
}
export default CollectionCard;
