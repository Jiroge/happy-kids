import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Circle from "@uiw/react-color-circle";
import axios from "axios";
import { AiOutlineHeart, AiTwotoneHeart } from "react-icons/ai"

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import RelatedProduct from "../../components/relatedProduct/RelatedProduct";

import "./Product-Detail.scss";
import config from "../../config";

const url = config.url;

function ProductDetail() {
    const location = useLocation();
    const [image, setImage] = useState(0);
    //   const [hex, setHex] = useState();
    const [value, setValue] = useState(1);
    const [data, setData] = useState("");
    const [dropdown, setDropdown] = useState("Select");
    const [like, setLike] = useState(false);
    const [showInFo, setShowInFo] = useState(true);
    const [showReturn, setShowReturn] = useState(true);
    const product = location.state.product;

    useEffect(() => {
        const fetchProductFromDB = async () => {
            const fetchProduct = await axios.get(`${url}/products/details/${product.sku}`);
            // console.log(fetchProduct.data.detail.data.catalog.product);
            setData(fetchProduct.data.detail.data.catalog.product);
        };

        fetchProductFromDB();
    }, [product]);

    const handleDescription = (index) => {
        if (index === 0) {
            setShowInFo(!showInFo)
        } else {
            setShowReturn(!showReturn)
        }
    }

    return (
        <>
            <Navbar />

            <div className="product-content">
                <div className="product-image">
                    <img src={product.media[image].url} alt="productimage" />
                    <div className="image">
                        {product.media.map((image, index) => (
                            <img
                                src={image.url}
                                alt="productimage"
                                key={index}
                                onClick={() => setImage(index)}
                            />
                        ))}
                    </div>
                    <p>{data.description}</p>
                </div>

                <div className="product-detail">
                    <h3>I'm a product</h3>
                    <p>sku: {product.sku}</p>
                    <p>{product.price}₺</p>
                    <p>Color</p>
                    <div className="color">
                        {data ? (
                            <>
                                {data.options[0].selections.map((image, index) => (
                                    <Circle
                                        className={"focused-circle"}
                                        key={index}
                                        colors={[image.value]}
                                        onClick={() => {
                                            setImage(index);
                                        }}
                                    />
                                ))}
                            </>
                        ) : (
                            ""
                        )}
                    </div>
                    <p>Size</p>
                    {data ? (
                        <select value={dropdown} onChange={(event) =>
                            setDropdown(event.target.value)}>
                            <option value="">Select</option>
                            {data.options[1].selections.map((description, index) => (
                                <option key={index} value={description.description}>{description.description}</option>
                            ))}
                        </select>
                    ) : (
                        ""
                    )}
                    <p>Quantity</p>
                    <input
                        type="number"
                        value={value}
                        onChange={(e) => {
                            const newValue = e.target.value;
                            if (newValue < 0) {
                                setValue(0);
                            } else {
                                setValue(newValue);
                            }
                        }}
                    />
                    <div className="add-to-cart">
                        <button>Add To Cart</button>
                        <div className="heart">
                            {like ?
                                <AiTwotoneHeart style={{ width: "100%", height: "100%", fill: 'red' }} onClick={() => setLike(false)} />
                                :
                                <AiOutlineHeart style={{ width: "100%", height: "100%", fill: 'red' }} onClick={() => setLike(true)} />
                            }
                        </div>

                    </div>
                    <div className="buy-now">
                        <button>Buy Now</button>
                    </div>
                    <div className="description">
                        {data ?
                            <>
                                {data.additionalInfo.map((detail, index) => (
                                    <div key={index}>
                                        <div className="show-symbol">
                                            <p onClick={() => handleDescription(index)}>{detail.title}</p>
                                            {index === 0 ?
                                                <>
                                                    <p>{showInFo ? "-" : "+"}</p>

                                                </>
                                                :
                                                <>
                                                    <p>{showInFo ? "-" : "+"}</p>

                                                </>
                                            }
                                        </div>
                                        {index === 0 ?
                                            <>
                                                {showInFo &&
                                                    <p>{detail.description.replace('<p>', '').replace('</p>', '')}</p>
                                                }
                                                <hr />
                                            </>
                                            :
                                            <>
                                                {showReturn &&
                                                    <p>{detail.description.replace('<p>', '').replace('</p>', '')}</p>
                                                }
                                            </>
                                        }
                                    </div>
                                ))
                                }
                            </>
                            :
                            ""
                        }
                    </div>
                    <div>
                    </div>

                </div>
            </div>
            {data ? <RelatedProduct relate={data.options} productName={product.sku} /> : ""}
            <Footer />
        </>
    );
}
export default ProductDetail;
