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
  const products = props.mockupdata.list;
  // console.log(props.mockupdata.list);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    // nextArrow: <AiOutlineRight />,
    // prevArrow: <AiOutlineLeft />,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div
      style={{
        margin: " 70px",
        height: "750px",
        padding: 0,
        // backgroundColor: "red",
      }}
    >
      <h4
        style={{ letterSpacing: "5px", fontSize: "1.5em", textAlign: "center" }}
      >
        New Arrivals
      </h4>

      <Slider {...settings}>
        {products.map((product, index) => {
          return (
            <div style={{ width: "20%" }} key={index}>
              <Card product={product} />
            </div>
          );
        })}
      </Slider>
      <div className="shop-all">
        <Link>
          <button>Shop all</button>
        </Link>
      </div>
      <hr
        style={{
          marginLeft: "-100px",
          width: "100vw",
        }}
      />
    </div>
  );
}
export default MeduimCardSlide;
