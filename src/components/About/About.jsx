import React from "react";
import about1 from "../../assets/card1.png";
import about2 from "../../assets/card3.png";
import nikelogo from "../../assets/nikelogo.png";
import addlogo from "../../assets/addlogo.png";
import pumalogo from "../../assets/PUMA.png";
import converselogo from "../../assets/conv.png";
import reeboklogo from "../../assets/reebok.png";
import balogo from "../../assets/bal.png";

const About = () => {
  return (
    <div className="w-full pt-[6rem]">
      <div className="w-[100%] mx-auto lg:grid lg:grid-cols-3 sm:flex sm:flex-col sm:gap-6 md:flex md:flex-col md:gap-6">
        <div className="bg-[#188571]">
          <img
            src={about1}
            alt="loading"
            className=" flex  items-center justify-center"
          />
        </div>
        <div className=" w-[90%] mx-auto">
          <h2 className="font-bold text-3xl text-black text-center py-6">
            About <span style={{ color: "red" }}>Kicks</span>
          </h2>
          <p className="text-black font-normal leading-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            modi fugit! Et vitae repudiandae officia. Tempore vero dolore amet
            natus aspernatur fugiat enim blanditiis, architecto vitae
            exercitationem, odit officiis quis!
          </p>
          <p className="text-black font-normal leading-8 text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            quam, corporis voluptas esse suscipit rem, quod cupiditate quaerat
            ab sunt facere distinctio ducimus nihil? Quod quos deleniti sit
            aperiam. Error.
          </p>
          <p className="text-black font-normal leading-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            perspiciatis a? Veritatis quas id expedita perferendis maiores,
            nesciunt tempore. Sed veritatis eaque dolor iusto, velit ducimus
            ratione enim eum et.
          </p>
          <p className="text-black font-normal leading-8 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            ut quisquam iure unde nulla quia, hic facilis voluptas assumenda
            quam eum, alias reprehenderit expedita saepe corrupti, ea quod
            perspiciatis architecto.
          </p>
        </div>
        <div className="bg-[#188571] ">
          <img src={about2} alt="loading" className=" mt-[7rem]" />
        </div>
      </div>
      <div className="w-full mt-10 flex flex-col gap-8 mb-10 ">
        <h2 className="font-bold text-black text-2xl ml-8"> Our Partners</h2>
        <div className=" bg-[#188571]  py-10  ">
          <div className="md:grid md:grid-cols-3 gap-8 p-8 w-[85%] mx-auto sm:grid sm:grid-cols-2">
            <img src={addlogo} alt="loading" className="[w-100px] h-[100px]" />
            <img src={nikelogo} alt="loading" className="[w-100px] h-[100px]" />
            <img
              src={converselogo}
              alt="loading"
              className="[w-100px] h-[100px]"
            />
            <img src={balogo} alt="loading" className="[w-100px] h-[100px]" />
            <img
              src={reeboklogo}
              alt="loading"
              className="[w-100px] h-[100px]"
            />
            <img src={pumalogo} alt="loading" className="[w-100px] h-[100px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
