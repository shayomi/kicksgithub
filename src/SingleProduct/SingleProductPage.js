import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import IMGA from "../assets/itemA.png";
import IMGB from "../assets/itemB.png";
import IMGC from "../assets/itemC.png";
import NIK1 from "../assets/nik1.png";
import NIK2 from "../assets/nik2.png";
import NIK3 from "../assets/nik3.png";
import NIK4 from "../assets/nik4.png";

import ItemForm from "./ItemForm";
import CartContext from "../store/cart-context";
import TrendingProduct from "../components/Homepage/TrendingProduct";
import { Allproduct } from "../Data/StoreData/AllproductData";
import CartProvider from "../store/CartProvider";
import RelatedProduct from "./RelatedProduct";
import Footer from "../components/UI/Footer";

const SingleProduct = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: thisItem.id,
      image: thisItem.image,
      title: thisItem.title,
      amount: amount,
      price: thisItem.price,
    });
  };

  const { itemId } = useParams();
  const thisItem = Allproduct.find((props) => props.id === itemId);

  return (
    <CartProvider>
      <div className="lg:w-[80%] lg:pt-[8rem] lg:mx-auto md:w-[80%] md:mx-auto md:pt-[8rem] sm:w-[90%] sm:pt-[8rem] sm:mx-auto">
        <Link to="/store">
          <button className="bg-black text-[#188571]  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium  my-3 p-2">
            Back to store
          </button>
        </Link>
        <div className="mx-auto lg:flex lg:flex-row md:flex md:flex-col  md:ml-0">
          <div className="item_container-left">
            <div className="md:w-[500px] bg-[#188571] rounded-[1rem] py-1 duration-500 ease-in-out mt-[2rem] mx-1 ">
              <img
                src={thisItem.image}
                alt="loading"
                className="w-[400px] duration-500 justify-center my-0 mx-auto ease-in-out"
              />
              <div className="flex flex-row justify-evenly mx-auto">
                <img src={IMGA} className="w-[80px] mt-2 mb-[4rem]" />
                <img src={IMGB} className="w-[80px] mt-2 mb-[4rem]" />
                <img src={IMGC} className="w-[80px] mt-2 mb-[4rem]" />
              </div>
            </div>
          </div>
          <div className="ml-3 mt-6">
            <h2 className="px-5 text-[#188571] font-bold text-2xl justify-start">
              {thisItem.title}
            </h2>
            <div className="md:flex md:flex-row sm:flex sm:flex-row sm:gap-10  lg:flex lg:flex-col md:gap-6">
              <div className="sm:hidden md:grid md:grid-cols-2 gap-1 mt-1">
                <img src={NIK3} className="md:w-[100px] sm:w-[80px]" />
                <img src={NIK2} className="md:w-[100px] sm:w-[80px]" />
                <img src={NIK4} className="md:w-[100px] sm:w-[80px]" />
                <img src={NIK1} className="md:w-[100px] sm:w-[80px]" />
              </div>
              <div className="item_purchase-details">
                <div className="flex flex-row gap-4 my-3">
                  <h4 className="text-black text-md font-medium">
                    {" "}
                    select color :
                  </h4>
                  <svg className="item_rectcolor" width="20px" height="20px">
                    <rect width="20px" height="20px" fill="#27B6E4"></rect>
                  </svg>
                  <svg className="item_rectcolor" width="20px" height="20px">
                    <rect width="20px" height="20px" fill="#5F5F5F"></rect>
                  </svg>
                  <svg className="item_rectcolor" width="20px" height="20px">
                    <rect width="20px" height="20px" fill="#9A3A64"></rect>
                  </svg>
                </div>
                <div className="flex flex-row gap-4 my-3">
                  <h4 className="text-black text-md font-medium">Size :</h4>
                  <input
                    type="text"
                    className="border-slate-800 border-solid border-2 bg-transparent rounded-md w-[50px] "
                  />
                </div>
                <div className="my-3">
                  <h4 className="font-bold text-lg text-black">
                    Price : ${thisItem.price}
                  </h4>
                </div>
                <div>
                  <ItemForm onAddToCart={addToCartHandler} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <RelatedProduct />
      </div>
      <Footer />
    </CartProvider>
  );
};

export default SingleProduct;
