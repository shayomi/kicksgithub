import React from "react";
import { Highlightdata } from "../../Data/HomepageData/HighlightData";
import { Link } from "react-router-dom";

const HighlightProduct = () => {
  return (
    <div className="w-full flex flex-col my-3 px-10">
      <h2 className="px-5 text-[#188571] font-bold text-2xl justify-start">
        This week's Highlights
      </h2>

      <div className="w-full mx-auto sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 gap-5 my-10">
        {Highlightdata.map((highlight) => {
          return (
            <div
              key={highlight.id}
              className="bg-[#188571] hover:bg-[#4da39c] duration-500 ease-in-out px-2 py-6 rounded-2xl flex flex-col justify-center align-middle"
            >
              <div className="flex flex-row justify-between mx-3">
                {highlight.icon1}
                {highlight.icon2}
              </div>
              <div className="w-[200px]  mx-auto ">
                <img
                  src={highlight.image}
                  alt="loading"
                  className=" px-2 py-2 hover:scale-125 duration-500 ml-4 w-[200px] h-[200px] object-contain"
                />
              </div>
              <h3 className="font-medium text-xl text-black text-center">
                {highlight.title}
              </h3>
              <h4 className="font-bold text-xl text-black text-center">
                ${highlight.price}
              </h4>
              <button className="  bg-[#0f3831]  text-white  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium mx-5 my-3 p-2">
                Shop now
              </button>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Link to="store">
          <button className="bg-black text-[#188571] hover:bg-[#188571] hover:text-white duration-500 ease-in-out rounded-md font-medium mx-5 my-3 p-2">
            Continue in Store
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HighlightProduct;
