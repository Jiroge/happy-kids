import React, { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Circle from "@uiw/react-color-circle";
import axios from "axios";
import { Checkbox, FormControlLabel } from "@material-ui/core";

import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import config from "../../config";
import CollectionCard from "../../components/collectionCard/CollectionCard";

import "./Shop-Collection.scss";

const options = [
  { value: "0-3", display: "0-3 months", label: "0-3 months" },
  { value: "3-6", display: "3-6 months", label: "3-6 months" },
  { value: "6-12", display: "6-12 months", label: "6-12 months" },
  { value: "2", display: "2 years", label: "2 years" },
  { value: "3", display: "3 years", label: "3 years" },
  { value: "12-18", display: "12-18 months", label: "12-18 months" },
  { value: "18-24", display: "18-24 months", label: "18-24 months" },
];

const color = [
  { colorCode: "#45458f", text: "Blue" },
  { colorCode: "#fafaef", text: "Cream" },
  { colorCode: "#86ad91", text: "Green" },
  { colorCode: "#ffe5e9", text: "Light Pink" },
  { colorCode: "#f9bb9c", text: "Peach" },
  { colorCode: "#cd7551", text: "Terracota" },
  { colorCode: "#ffffff", text: "White" },
];

const url = config.url;

function ShopCollection(props) {
  const [products, setProducts] = useState(props.products.list);
  const [isChoose, setIsChoose] = useState(false);
  const [clickCollection, setClickCollection] = useState(false);

  const [clickPrice, setClickPrice] = useState(false);
  const [value, setValue] = useState([17.99, 19.99]);

  const [clickColor, setClickColor] = useState(false);
  const [hex, setHex] = useState();
  const [colorHover, setColorHover] = useState(false);
  const [colorText, setColorText] = useState("");

  const [clickSize, setClickSize] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const [filter, setFilter] = useState({
    collection: null,
    price: null,
    color: [],
    size: [],
  });

  const handlePriceChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchDataFromData = async (
      fetchCollection,
      fetchPrice,
      fetchColor,
      fetchSize
    ) => {
      if (fetchCollection) {
        const checkAllCollection =
          fetchCollection === "All" ? "" : fetchCollection;
        const urlParams = new URLSearchParams({
          ...(checkAllCollection && { CATEGORY: checkAllCollection }),
          ...(fetchPrice && { PRICE: fetchPrice }),
          ...(fetchColor && { OPTION_COLOR: fetchColor }),
          ...(fetchSize && { OPTION_LIST: fetchSize }),
        });
        const fetchData = await axios.get(
          `${url}/products/?${urlParams.toString()}`
        );
        setProducts(
          fetchData.data.detail.data.catalog.category.productsWithMetaData.list
        );
        // }
      } else if (fetchPrice) {
        const checkAllCollection =
          fetchCollection === "All" ? "" : fetchCollection;

        const urlParams = new URLSearchParams({
          PRICE: fetchPrice,
          ...(checkAllCollection && { CATEGORY: checkAllCollection }),
          ...(fetchColor && { OPTION_COLOR: fetchColor }),
          ...(fetchSize && { OPTION_LIST: fetchSize }),
        });
        const fetchData = await axios.get(
          `${url}/products/?${urlParams.toString()}`
        );
        setProducts(
          fetchData.data.detail.data.catalog.category.productsWithMetaData.list
        );
      } else if (fetchColor) {
        const checkAllCollection =
          fetchCollection === "All" ? "" : fetchCollection;

        const urlParams = new URLSearchParams({
          OPTION_COLOR: fetchColor,
          ...(fetchPrice && { PRICE: fetchPrice }),
          ...(checkAllCollection && { CATEGORY: checkAllCollection }),
          ...(fetchSize && { OPTION_LIST: fetchSize }),
        });
        const fetchData = await axios.get(
          `${url}/products/?${urlParams.toString()}`
        );
        setProducts(
          fetchData.data.detail.data.catalog.category.productsWithMetaData.list
        );
      } else if (fetchSize) {
        const checkAllCollection =
          fetchCollection === "All" ? "" : fetchCollection;

        const urlParams = new URLSearchParams({
          OPTION_LIST: fetchSize,
          ...(fetchColor && { OPTION_COLOR: fetchColor }),
          ...(fetchPrice && { PRICE: fetchPrice }),
          ...(checkAllCollection && { CATEGORY: checkAllCollection }),
        });
        const fetchData = await axios.get(
          `${url}/products/?${urlParams.toString()}`
        );
        console.log(`${url}/?${urlParams.toString()}`);
        setProducts(
          fetchData.data.detail.data.catalog.category.productsWithMetaData.list
        );
      }
    };

    if (
      filter.collection ||
      filter.price ||
      filter.color[0] ||
      filter.size[0]
    ) {
      setIsChoose(true);
      const fetchCollection = filter.collection ? `${filter.collection}` : "";
      const fetchColor = filter.color ? `${filter.color}` : "";
      const fetchPrice = filter.price
        ? `${filter.price[0]}-${filter.price[1]}`
        : "";
      const fetchSize = filter.size[0] ? `${filter.size[0].label}` : "";

      fetchDataFromData(fetchCollection, fetchPrice, fetchColor, fetchSize);
    }
  }, [filter, isChoose]);

  const handleFilter = (text) => {
    const checkCollection = ["All", "T shirts", "Bodysuits"];
    const foundCollection = checkCollection.find((element) => element === text);
    if (foundCollection) {
      setFilter({ ...filter, collection: text });
    }

    if (typeof text[0] == "number") {
      setFilter({ ...filter, price: text });
    }

    const checkColor = [
      color[0].text,
      color[1].text,
      color[2].text,
      color[3].text,
      color[4].text,
      color[5].text,
      color[6].text,
    ];
    const foundColor = checkColor.find((element) => element === text);
    if (foundColor) {
      setFilter((prevState) => ({
        ...prevState,
        color: text,
      }));
    }

    if (typeof text[0].value === "string") {
      setFilter((prevState) => ({
        ...prevState,
        size: text,
      }));
    }
    // console.log("text:", text);
  };

  return (
    <>
      <Navbar select={false} />
      <div className="filter-tab">
        <div className="filter">
          <h4>Filter by</h4>
          <hr />
          <ul>
            <li>
              <div
                className="show-symbol"
                onClick={() => setClickCollection(!clickCollection)}
              >
                <p>Collection</p>
                <p>{clickCollection ? "+ " : "-"}</p>
              </div>
              {clickCollection && (
                <div className="collection">
                  <ul>
                    <li onClick={() => handleFilter("All")}>All</li>
                    <li onClick={() => handleFilter("T shirts")}>T shirts</li>
                    <li onClick={() => handleFilter("Bodysuits")}>Bodysuits</li>
                  </ul>
                </div>
              )}
            </li>
            <hr />
            <li>
              <div
                className="show-symbol"
                onClick={() => setClickPrice(!clickPrice)}
              >
                <p>Price</p>
                <p>{clickPrice ? "+ " : "-"}</p>
              </div>
              {clickPrice && (
                <div className="price-range">
                  <Slider
                    value={value}
                    onChange={handlePriceChange}
                    step={0.1}
                    marks
                    min={17.99}
                    max={19.99}
                    onChangeCommitted={(e, value) => {
                      handleFilter(value);
                    }}
                  />
                  <div className="max-min">
                    <p>{value[0]}₺</p>
                    <p>{value[1]}₺</p>
                  </div>
                </div>
              )}
            </li>
            <hr />
            <li>
              <div
                className="show-symbol"
                onClick={() => setClickColor(!clickColor)}
              >
                <p className="color-showing">
                  Color: {colorHover && colorText}
                </p>
                <p>{clickColor ? "+ " : "-"}</p>
              </div>
              {clickColor && (
                <div className="color-listing">
                  {color.map((color, index) => (
                    <div key={index}>
                      <Circle
                        className={"focused-circle"}
                        colors={[color.colorCode]}
                        color={hex}
                        onChange={(color) => {
                          setHex(color.hex);
                        }}
                        onClick={(colors) => {
                          handleFilter(color.text);
                          setHex(colors.hex);
                        }}
                        tabIndex={index}
                        onMouseOver={() => {
                          setColorText(color.text);
                          setColorHover(true);
                        }}
                        onMouseOut={() => {
                          setColorText(null);
                          setColorHover(false);
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}
            </li>
            <hr />
            <li>
              <div
                className="show-symbol"
                onClick={() => setClickSize(!clickSize)}
              >
                <p>Size</p>
                <p>{clickSize ? "+ " : "-"}</p>
              </div>
              {clickSize && (
                <div className="checkbox">
                  <ul>
                    {options.map((option, index) => (
                      <li key={index}>
                        <FormControlLabel
                          key={option.value}
                          control={
                            <Checkbox
                              checked={selectedOptions.some(
                                (selected) => selected.value === option.value
                              )}
                              onChange={() => {
                                if (
                                  selectedOptions.some(
                                    (selected) =>
                                      selected.value === option.value
                                  )
                                ) {
                                  setSelectedOptions(
                                    selectedOptions.filter(
                                      (selected) =>
                                        selected.value !== option.value
                                    )
                                  );
                                } else {
                                  setSelectedOptions([
                                    ...selectedOptions,
                                    option,
                                  ]);
                                  handleFilter([...selectedOptions, option]);
                                }
                              }}
                              color="primary"
                            />
                          }
                          label={option.display}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <hr />
            {isChoose && (
              <li
                onClick={() => {
                  setFilter({
                    collection: null,
                    price: null,
                    color: [],
                    size: [],
                  });
                  setProducts(props.products.list);
                  setIsChoose(false);
                }}
                style={{ cursor: "pointer" }}
              >
                Clear Filters X
              </li>
            )}
          </ul>
        </div>
        <div className="product-row">
          {products.map((product, index) => (
            <div key={index} className="card">
              <CollectionCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
export default ShopCollection;
