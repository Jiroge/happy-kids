import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import "./App.scss";
import Home from "./pages/home/Home";
import ShopCollection from "./pages/shopCollection/Shop-Collection.jsx";
import OurStory from "./pages/ourStory/Our-Story.jsx";
import Contact from "./pages/contact/Contact.jsx";
import ProductDetail from "./pages/productDetail/Product-Detail.jsx";
import ShippingReturns from "./pages/shipping-Returns/Shipping-Returns.jsx";
import StorePolicy from "./pages/storePolicy/StorePolicy.jsx";
import PaymentMethods from "./pages/paymentMethods/PaymentMethods.jsx";
import Faq from "./pages/faq/Faq.jsx";

import config from "./config";

const url = config.url;

function App() {
  const [product, setProduct] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetcAllProduct = async () => {
      const allProduct = await axios.get(`${url}/products/`);
      setProduct(
        allProduct.data.detail.data.catalog.category.productsWithMetaData
      );
      if (allProduct) {
        setLoading(true);
      }
    };
    fetcAllProduct();
  }, []);

  if (!loading) {
    return <p style={{ textAlign: "center", marginTop: "20%" }}>Loading...</p>;
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home products={product} />} />
          <Route
            path="/ShopCollection"
            element={<ShopCollection products={product} />}
          />
          <Route path="/OurStory" element={<OurStory />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/ProductDetail" element={<ProductDetail />} />
          <Route path="/ShippingReturns" element={<ShippingReturns />} />
          <Route path="/StorePolicy" element={<StorePolicy />} />
          <Route path="/PaymentMethods" element={<PaymentMethods />} />
          <Route path="/Faq" element={<Faq />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
