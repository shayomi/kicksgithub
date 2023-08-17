import React from "react";
import { useParams } from "react-router-dom";
import { TopPostData } from "../Data/BlogData/TopPostData";
import { BlogData } from "../Data/BlogData/BlogData";
import PostYouMayLike from "../components/Blog/PostYouMayLike";

const BlogDetail = (props) => {
  const { blogId } = useParams();
  const mainBlog = BlogData.find((props) => props.id === blogId);

  return (
    <div className="w-full pt-[8rem]">
      <div className="flex flex-col sm:w-[98%] md:w-[80%] lg:w-[60%]  gap-2 mx-auto">
        <h2 className="text-black font-bold text-3xl text-center">
          {mainBlog.title}
        </h2>
        <div className="w-full flex flex-col">
          <img
            src={mainBlog.image}
            className="w-[90%] bg-[#188571]  mx-auto  my-6"
          />
          <div className="w-[90%] mx-auto">
            <div className="flex flex-row justify-between text-[red] text-sm">
              <p>{mainBlog.author}</p>
              <p>{mainBlog.time}</p>
            </div>
            <h5 className="text-sm text-black mx-auto font-normal text-justify leading-8 pt-3">
              {mainBlog.content}
            </h5>
          </div>
        </div>
      </div>
      <div className="">
        <PostYouMayLike />
        <div className="w-full my-6 ">
          <div className="lg:w-[50%] md:w-[70%] mx-auto md:grid md:grid-cols-2 sm:flex sm:flex-col ">
            <div className="  flex flex-col gap-2 text-black font-bold mt-4">
              <h2>Subscribe to our channels</h2>
              <p>
                Get exciting news from{" "}
                <span style={{ color: "red" }}>kicks blog</span>{" "}
              </p>
            </div>
            <div className=" flex flex-col gap-2 text-black justify-start">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="p-1 rounded-md border-[1px] border-black"
              />
              <button
                type="submit"
                className="bg-black text-[#188571]  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium mx-3 my-3 p-2"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
