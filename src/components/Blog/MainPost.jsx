import React from "react";
import { MainPostData } from "../../Data/BlogData/MainPostData";
import { Link } from "react-router-dom";

const MainPost = () => {
  return (
    <div className="w-full mt-10 mb-10">
      <div className="sm:flex sm:flex-col md:grid md:grid-cols-3 gap-10">
        {MainPostData.map((BMData) => {
          return (
            <div
              key={BMData.title}
              className=" sm:w-[320px] md:w-[200px] lg:w-[300px] mx-auto"
            >
              <div>
                <img src={BMData.image} />
              </div>
              <div className="w-[90%] mx-auto">
                <h4 className="font-bold text-[14px] text-black">
                  {BMData.title.substring(0, 31) + ".."}
                </h4>
                <div className="flex flex-row justify-between mx-auto my-2">
                  <p className="text-[12px] font-medium text-[red] ">
                    Author : {BMData.author.substring(0, 8)}
                  </p>
                  <p className="text-[12px] font-medium text-[red] ">
                    {BMData.time}
                  </p>
                </div>
                <h5 className="text-[13px] font-normal text-black text-justify">
                  {BMData.content.substring(0, 150) + "..."}
                </h5>
                <Link to={`/blog/${BMData.id}`}>
                  <button className="bg-black text-[#188571]  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium  my-3 p-2">
                    Keep reading
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPost;
