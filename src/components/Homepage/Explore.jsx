import React from "react";
import Img1 from "../../assets/exclusive1.png";
import Img2 from "../../assets/exclusive2.png";

const Explore = () => {
  return (
    <div className="w-full  flex-col my-4">
      <h2 className="px-10 py-10 text-[#188571] font-bold text-2xl justify-start">
        Explore our Fashion Home
      </h2>
      <div className="w-full  py-3 px-4 my-1 ">
        <div className=" sm:w-full md:max-w-[1240px] md:mx-auto md:grid md:grid-cols-2">
          <div className=" bg-[#65beae]  flex flex-col justify-center">
            <h1 className="text-black text-3xl font-bold py-2 text-center ">
              {" "}
              Kicking it hard with <span style={{ color: "red" }}>fashion</span>
            </h1>
            <div className="py-4">
              <img className="w-[400px] mx-auto" src={Img1} />
            </div>
            <h2 className="text-xl text-black py-4 text-center px-auto">
              Get amazing discounts when you shop at kikcs online sneakers
              stores
            </h2>

            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto  py-3">
              Get Started
            </button>
          </div>
          <img
            className="sm:hidden md:flex md:w-[500px] md:mx-auto md:my-2 "
            src={Img2}
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default Explore;
