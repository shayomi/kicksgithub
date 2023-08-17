import React from "react";

import { newproductdata } from "../../Data/HomepageData/NewproductData";
import { Link } from "react-router-dom";

const Newproduct = () => {
  return (
    <div className="w-full flex flex-col my-3 px-10">
      <h3 className="px-5 text-[#188571] font-bold text-2xl justify-start">
        New Products
      </h3>

      <div className="w-full mx-auto grid md:grid-cols-3 gap-8 my-10 ">
        {newproductdata.map((newproduct) => {
          return (
            <div
              key={newproduct.id}
              className="bg-[#188571] hover:bg-[#4da39c] duration-500 ease-in-out px-2 py-6 rounded-2xl flex flex-col justify-center align-middle"
            >
              <img
                className="w-[300px] px-2 py-8 hover:scale-125 duration-500 ml-4"
                src={newproduct.img}
                alt="loading"
              />
              <h3 className="text-center font-medium text-xl">
                {newproduct.name}
              </h3>
            </div>
          );
        })}
      </div>
      <div className="flex justify-end">
        <Link to="store">
          <button className="bg-black text-[#188571]  hover:bg-[#188571] hover:text-white duration-500 ease-in-out rounded-md font-medium mx-5 my-3 p-2">
            Continue in Store
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Newproduct;
