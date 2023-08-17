import React from "react";
import Img1 from "../../assets/feat1.png";

const Features = () => {
  return (
    <div className="w-full  flex-col my-4">
      <h2 className="px-10 py-4 text-[#188571] font-bold text-2xl justify-start">
        This week's feature
      </h2>
      <div className="w-full bg-[#188571] py-4 px-4 my-3 ">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <div className="sm:hidden md:flex md:flex-col md:justify-center">
            <p className="text-[#00df9a] text-2xl  py-5 ">
              The Nike Airforce new release
            </p>
            <h2 className="text-2xl font-bold py-4">
              Taking few steps to better{" "}
              <span style={{ color: "red", fontWeight: "700" }}>fashion</span>
            </h2>
            <p>
              Here is everything you need to know about the new Airforce gait
            </p>
            <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
              Get Started
            </button>
          </div>
          <img
            className="w-[600px] mx-auto my-2 mt-[-1rem]"
            src={Img1}
            alt="/"
          />
        </div>
        <div className="sm:flex sm:flex-col sm:justify-center md:hidden ">
          <p className="text-[#00df9a] text-2xl  py-5 ">
            The Nike Airforce new release
          </p>
          <h2 className="text-2xl font-bold py-4">
            Taking few steps to better{" "}
            <span style={{ color: "red", fontWeight: "700" }}>fashion</span>
          </h2>
          <p>Here is everything you need to know about the new Airforce gait</p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
