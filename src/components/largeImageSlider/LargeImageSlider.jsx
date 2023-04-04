import { useState, useRef, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./LargeImageSlider.scss";
const LargeImageSlider = ({ images, autoPlayDelay = 5000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const resetTimeout = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(
        () =>
          setCurrentImageIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          ),
        autoPlayDelay
      );
    };
    resetTimeout();
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentImageIndex, images.length, autoPlayDelay]);

  const handleArrowClick = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex(
        currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
      );
    } else {
      setCurrentImageIndex(
        
        currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1
      );
    }
  };

  const handleDotClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100vh",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "5%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            color: "#282828",
            fontSize: "2rem",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <AiOutlineLeft onClick={() => handleArrowClick("left")} />
        </div>

        {currentImageIndex === 2 && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "#282828",
              fontSize: "2rem",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <p
              style={{
                letterSpacing: "10px",
                fontWeight: "5",
                marginTop: 0,
              }}
            >
              NEW COLLECTION
            </p>
            <div className="shop-button">
              <Link>
                <button>Shop Now</button>
              </Link>
            </div>
          </div>
        )}

        <div
          style={{
            position: "absolute",
            top: "50%",
            right: "5%",
            transform: "translateY(-50%)",
            backgroundColor: "transparent",
            border: "none",
            color: "#282828",
            fontSize: "2rem",
            cursor: "pointer",
            outline: "none",
          }}
        >
          <AiOutlineRight onClick={() => handleArrowClick("right")} />
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {images.map((images, index) => (
            <div
              key={index}
              onClick={() => handleDotClick(index)}
              style={{
                width: "0.5rem",
                height: "0.5rem",
                backgroundColor:
                  index === currentImageIndex ? "#AFAFAF" : "#282828",
                borderRadius: "50%",
                margin: "0.5rem",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeImageSlider;
