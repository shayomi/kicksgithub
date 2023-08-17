import React, { useState } from "react";

import { Link } from "react-router-dom";

import { Allproduct } from "../../Data/StoreData/AllproductData";
import Category from "./Category";

const AllProduct = (props) => {
  // .filter((store) => {
  //         return search.toLowerCase().includes(search);
  //       })

  return (
    <div id="allproduct" className="w-full py-[6rem] px-4">
      <h2 className="px-5 text-[#188571] font-bold text-2xl justify-start">
        {" "}
        All Collections
      </h2>

      <div className="mt-6 w-full">
        <Category onClick={props.filterResult} />
      </div>

      <div className="w-full mx-auto sm:grid sm:grid-cols-2 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-8 my-10">
        {Allproduct.map((store) => {
          return (
            <div
              key={store.id}
              className="bg-[#188571] px-2 py-3 rounded-2xl flex flex-col justify-center align-middle"
            >
              <div className="flex flex-row justify-between mx-5">
                {store.icon1}
                {store.icon2}
              </div>
              <div className=" sm:w-[100px]  md:w-[150px]  mx-auto ">
                <img
                  src={store.image}
                  alt="loading"
                  className=" px-1 py-2 hover:scale-125 duration-500 sm:w-[100px] sm:h-[100px] md:w-[150px] md:h-[150px] object-contain"
                />
              </div>
              <h3 className=" sm:font-normal sm:text-sm md:font-medium md:text-xl text-black text-center">
                {store.title}
              </h3>
              <h4 className="sm:font-medium sm:text-sm md:font-bold md:text-xl text-black text-center">
                ${store.price}
              </h4>
              <Link
                className="text-center w-full mx-auto "
                to={`/store/${store.id}`}
              >
                <button className="  bg-[#0f3831]  text-white  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium mx-5 my-3 p-2">
                  Shop now
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllProduct;
