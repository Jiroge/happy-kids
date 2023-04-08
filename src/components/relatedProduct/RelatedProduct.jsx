import { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

import config from "../../config";
// import mockupdata from "../../mockupProduct.json";
import RelatedCard from "./relatedCard/RelatedCard";

const url = config.url;

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <AiOutlineRight className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <AiOutlineLeft className={className} onClick={onClick} />;
}
const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
};

function RelatedProduct(props) {
    const [allProduct, setAllProduct] = useState()
    const checkCategory = (fetchTShirts, fetchBodysuits) => {
        const foundProduct = fetchTShirts.find(element => element.sku === props.productName);
        if (foundProduct) {
            const displayTShirts = fetchTShirts.filter(element =>
                element.sku !== props.productName
            )
            setAllProduct([...displayTShirts, ...fetchBodysuits])
        } else {
            const displayBodysuits = fetchBodysuits.filter(element =>
                element.sku !== props.productName
            )
            setAllProduct([...displayBodysuits, ...fetchTShirts])
        }
    }

    useEffect(() => {
        const fetchAllData = async () => {
            const fetchTShirts = await axios.get(`${url}/products/?CATEGORY=T%20shirts`)
            const fetchBodysuits = await axios.get(`${url}/products/?CATEGORY=Bodysuits`)
            checkCategory(fetchTShirts.data.detail.data.catalog.category.productsWithMetaData.list, fetchBodysuits.data.detail.data.catalog.category.productsWithMetaData.list)
        }
        fetchAllData()
    })

    return (
        <>
            {allProduct ?
                <div style={{ width: "70%", margin: "0 auto" }}>
                    <h4
                        style={{ letterSpacing: "5px", fontSize: "1.5em", textAlign: "center", marginTop: "50px", marginBottom: "40px" }}
                    >
                        RELATED PRODUCTS
                    </h4>
                    <Slider {...settings}>
                        {allProduct.map((product, index) => (
                            <div style={{ marginRight: "10px" }} key={index}>
                                <RelatedCard product={product} />
                            </div>
                        ))}
                    </Slider>
                </div>

                : ""}

        </>
    )
}
export default RelatedProduct;
