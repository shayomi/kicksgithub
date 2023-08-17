import React from "react";
import AllProduct from "../components/Store/AllProduct";
import Footer from "../components/UI/Footer";
import StoreHero from "../components/Store/StoreHero";

const ProductStore = (props) => {
  return (
    <div>
      <StoreHero />
      <AllProduct />
      <Footer />
    </div>
  );
};

export default ProductStore;
