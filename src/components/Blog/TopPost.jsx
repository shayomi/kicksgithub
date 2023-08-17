import React from "react";

import { TopPostData } from "../../Data/BlogData/TopPostData";
import { Link } from "react-router-dom";

const TopPost = () => {
  return (
    <div className="w-full pt-[6rem]">
      <div className="bg-gradient-to-b from-[#aafaeb] to-[#188571]  ">
        <h1 className=" pt-2 pb-[17rem] ml-7 font-bold text-black text-3xl px-4 py-3">
          Welcome to kicks <span style={{ color: "red" }}>blog</span>
        </h1>
      </div>
      <div className="flex flex-col relative top-[-15rem] w-[95%] md:mx-auto lg:mx-auto sm:mx-auto">
        <h3 className=" pt-2  ml-6 font-bold text-black text-xl px-4 py-3">
          Top Posts
        </h3>
        <div className=" mx-auto sm:flex sm:flex-col md:grid md:grid-cols-3 gap-10">
          {TopPostData.map((topPost) => {
            return (
              <div
                key={topPost.title}
                className="bg-gradient-to-b  from-[#188571] to-[#aafaeb] sm:w-[300px] md:w-[200px] lg:w-[300px]"
              >
                <div className="blogheader_topcard">
                  <div className="flex flex-row ml-2">
                    <img className="w-[20px] h-[20px]" src={topPost.logo} />
                    <img
                      className="sm:w-[220px] sm:h-[190px] md:w-[150px] md:h-[120px] lg:w-[300px] lg:h-[200px]"
                      src={topPost.image}
                    />
                  </div>
                  <div className="w-[90%] mx-auto">
                    <h4 className="font-bold text-[14px] text-black">
                      {topPost.title.substring(0, 31) + ".."}
                    </h4>
                    <div className="flex flex-row justify-between mx-auto my-2">
                      <p className="text-[12px] font-medium text-[red] ">
                        Author : {topPost.author.substring(0, 8)}
                      </p>
                      <p className="text-[12px] font-medium text-[red] ">
                        {topPost.time}
                      </p>
                    </div>
                    <h5 className="text-[13px] font-normal text-black text-justify">
                      {topPost.content.substring(0, 150) + "..."}
                    </h5>
                    <Link to={`/blog/${topPost.id}`}>
                      <button className="bg-black text-[#188571]  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium  my-3 p-2">
                        Keep reading
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TopPost;
