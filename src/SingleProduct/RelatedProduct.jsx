import React from "react";
import { Trendingdata } from "../Data/HomepageData/TrendingData";

const RelatedProduct = () => {
  return (
    <div className="w-full flex flex-col my-3 px-10">
      <h2 className="px-5 text-[#188571] font-bold text-2xl justify-start">
        Related Sneakers
      </h2>

      <div className="w-full mx-auto sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-5 my-10">
        {Trendingdata.map((trending) => {
          return (
            <div
              key={trending.id}
              className="bg-[#188571] px-2 py-6 rounded-2xl flex flex-col justify-center align-middle"
            >
              <div className="flex flex-row justify-between mx-3">
                {trending.icon1}
                {trending.icon2}
              </div>
              <div className="w-[200px]  mx-auto ">
                <img
                  src={trending.image}
                  alt="loading"
                  className=" px-2 py-2 hover:scale-125 duration-500 ml-4 w-[200px] h-[200px] object-contain"
                />
              </div>
              <h3 className="font-medium text-xl text-black text-center">
                {trending.title}
              </h3>
              <h4 className="font-bold text-xl text-black text-center">
                ${trending.price}
              </h4>
              <button className="  bg-[#0f3831]  text-white  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium mx-5 my-3 p-2">
                Shop now
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelatedProduct;
