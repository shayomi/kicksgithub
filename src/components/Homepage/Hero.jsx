import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Img1 from "../../assets/air2.png";
import Img2 from "../../assets/add2.png";
import Img3 from "../../assets/reeb2.png";

const Hero = () => {
  return (
    <section className="w-full pt-24  px-4 bg-[#aafaeb] ">
      <div className="max-w-[1240px] mx-auto grid sm:grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col   ">
          <h3 className="lg:text-4xl md:text-2xl text-xl text-black font-bold p-5">
            Welcome to Kicks Store
          </h3>
          <h1 className="text-4xl text-black font-bold lg:w-2/4 md:w-full sm:w-full px-5 lg:py-5 md:py:3">
            Create your own <span style={{ color: "red" }}>steps</span>
          </h1>
          <h4 className="text-xl text-[#188571]  px-5 py-2">
            The World is at your feet
          </h4>
          <div>
            <img
              src={Img1}
              className="lg:hidden md:hidden sm:w-[350px] sm:mx-auto"
            />
          </div>
          <Link to="store">
            <button className="bg-black text-[#188571] hover:bg-[#188571] hover:text-white duration-500 ease-in-out w-2/4 rounded-md font-medium mx-5 my-3 px-[1.5rem] py-[1rem] sm:mx-auto lg:mx-0 md:mx-0">
              continue to store
            </button>
          </Link>
        </div>
        <div className="lg:w-[500px] md:w-[300px] sm:w-[0] mx-auto md:my-20 lg:my-1 ">
          <div className="swiper">
            <Swiper
              className="swiper_container"
              // install Swiper modules
              modules={[
                EffectFade,
                Autoplay,
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
              ]}
              spaceBetween={40}
              slidesPerView={1}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              loop={true}
              virtualTranslate={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={500}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="header_swiper">
                <img src={Img1} />
              </SwiperSlide>
              <SwiperSlide className="header_swiper">
                <img src={Img2} />
              </SwiperSlide>
              <SwiperSlide className="header_swiper">
                <img src={Img3} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
