import React from "react";
import Hero from "../components/Homepage/Hero";
import Newproduct from "../components/Homepage/NewProduct";
import TrendingProduct from "../components/Homepage/TrendingProduct";
import HighlightProduct from "../components/Homepage/Highlights";
import Features from "../components/Homepage/Features";
import Explore from "../components/Homepage/Explore";
import Footer from "../components/UI/Footer";
import Adverts from "../components/Homepage/Adverts";

const Homepage = (props) => {
  return (
    <div>
      <Hero />
      <Newproduct />
      <Adverts />
      <TrendingProduct onShow={props.filterResult} />
      <HighlightProduct />
      <Features />
      <Explore />
      <Footer />
    </div>
  );
};

export default Homepage;
