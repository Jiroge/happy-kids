import { Link } from "react-router-dom";

import "./MeduimCardSlide.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import Card from "./card/Card";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <AiOutlineRight className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <AiOutlineLeft className={className} onClick={onClick} />;
}

function MeduimCardSlide(props) {
  const products = props.products.list;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="meduim-card-slide">
      <h4 className="new-arrivals">New Arrivals</h4>
      <Slider {...settings}>
        {products.map((product, index) => {
          return (
            <div className="card-container" key={index}>
              <Card product={product} />
            </div>
          );
        })}
      </Slider>
      <div className="shop-all">
        <Link to="/ShopCollection">
          <button>Shop all</button>
        </Link>
      </div>
      <hr className="hr-style" />
    </div>
  );
}
export default MeduimCardSlide;
