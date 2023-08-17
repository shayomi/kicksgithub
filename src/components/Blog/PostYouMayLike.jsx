import React from "react";
import { RecentPostData } from "../../Data/BlogData/RecentPostData";
import { Link } from "react-router-dom";

const PostYouMayLike = () => {
  return (
    <div className="w-full mx-auto mt-[3rem]">
      <div className="flex flex-col max-w-[1240px] mx-auto">
        <div className="mx-3">
          <h2 className=" pt-2   font-bold text-black text-xl ml-[10rem] py-3">
            {" "}
            Posts you may like
          </h2>
        </div>
        <div className=" sm:flex sm:flex-col sm:gap-3 md:grid md:grid-cols-2 md:gap-6 lg:grid lg:grid-cols-4 lg:gap-6 mx-auto my-2">
          {RecentPostData.map((RPData) => {
            return (
              <div
                key={RPData.title}
                className="lg:w-[220px] md:w-[300px] sm:w-[300px]"
              >
                <img
                  className="sm:w-[300px] sm:h-[300px] md:w-[300px] md:h-[300px] lg:w-[220px] lg:h-[220px]"
                  src={RPData.image}
                />

                <div className="flex flex-row justify-between  mx-3 text-[red] text-[10px] font-medium">
                  <p>Author : {RPData.author}</p>
                  <p>{RPData.time}</p>
                </div>
                <h2 className="font-bold text-[14px] text-black  mx-3">
                  {" "}
                  {RPData.title}
                </h2>
                <h5 className="text-[13px] font-normal text-black text-justify mx-3">
                  {RPData.content.substring(0, 100) + "..."}
                </h5>
                <Link to={`/blog/${RPData.id}`}>
                  <button className="bg-black text-[#188571]  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium mx-3 my-3 p-2">
                    Keep reading
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostYouMayLike;
