import React from "react";
import mybg from "../../assets/storebg4.JPG";

const StoreHero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${mybg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full pt-[4rem] h-[100%]"
    >
      <div className=" py-[16rem] backdrop-brightness-50">
        <h1 className="text-white font-extrabold text-[2rem] text-center ">
          Welcome to <span style={{ color: "red" }}>Kicks </span> Online Store
        </h1>
        <div className="text-center">
          <a href="#allproduct">
            <button className="  bg-[#0f3831]  text-white  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium mx-5 my-3 p-2">
              Continue to Store
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default StoreHero;
