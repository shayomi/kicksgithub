import React from "react";
import { useParams } from "react-router-dom";
import { TopPostData } from "../Data/BlogData/TopPostData";
import { RecentPostData } from "../Data/BlogData/RecentPostData";

const TopPostDetails = (props) => {
  const { topPostId } = useParams();
  const thisBlog = TopPostData.find((props) => props.title === topPostId);

  return (
    <div className="w-full pt-[10rem]">
      <div className="grid grid-cols-2 w-[90%] gap-2">
        <div className="w-2/3 flex flex-col">
          <img src={thisBlog.image} className="w-[90%] mx-auto " />
          <h2 className="text-black font-bold text-xl">{thisBlog.title}</h2>
          <div className="flex flex-row justify-between text-[red] text-sm">
            <p>{thisBlog.author}</p>
            <p>{thisBlog.time}</p>
          </div>
          <h5 className="text-sm text-black mx-auto font-normal text-justify leading-8">
            {thisBlog.content}
          </h5>
        </div>
        <div className="flex flex-col w-1/3">
          <h2 className="text-black font-bold ">Posts you may like</h2>
          <div className="grid grid-cols-2 fixed">
            {RecentPostData.map((RPData) => {
              return (
                <div key={RPData.id} className="w-[90%] mx-auto">
                  <img src={RPData.image} className="w-[90%] mx-auto" />

                  <div className="blogdetailsright_subtitle">
                    <p>Author : {RPData.author}</p>
                    <p>{RPData.time}</p>
                  </div>
                  <h2> {RPData.title}</h2>

                  <button className="btn">Keep reading</button>
                </div>
              );
            })}
          </div>
          <div className="subscribe_container">
            <div className="subscribe_container-details">
              <h2>Subscribe to our channels</h2>
              <p>Get exciting news from kicks blog</p>
              <input type="text" placeholder="Enter Your Email" />
              <button type="submit">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPostDetails;
