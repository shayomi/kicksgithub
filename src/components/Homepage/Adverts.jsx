import React from "react";
import Img1 from "../../assets/adv1.jpg";
import Img2 from "../../assets/adv2.jpg";
import Img3 from "../../assets/adv3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import {
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

const Adverts = () => {
  return (
    <section className="w-full py-24  px-4">
      <div className="w-full">
        <div className="w-full ">
          <div className="swiper">
            <Swiper
              className="swiper_container"
              // install Swiper modules
              modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={40}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide className="header_swiper">
                <div
                  style={{
                    backgroundImage: `url(${Img1})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-full  h-[500px]"
                >
                  <div className=" py-[16rem] backdrop-brightness-50">
                    <h3 className="text-white font-extrabold text-[2rem] text-center">
                      The new balance 1983 classic model
                    </h3>

                    <div className="text-center">
                      <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                        Check Article
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="header_swiper">
                <div
                  style={{
                    backgroundImage: `url(${Img2})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-full  h-[500px]"
                >
                  <div className=" py-[16rem] backdrop-brightness-50">
                    <h3 className="text-white font-extrabold text-[2rem] text-center">
                      The new balance 1983 classic model
                    </h3>

                    <div className="text-center">
                      <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                        Check Article
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="header_swiper">
                <div
                  style={{
                    backgroundImage: `url(${Img3})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="w-full  h-[500px]"
                >
                  <div className=" py-[16rem] backdrop-brightness-50">
                    <h3 className="text-white font-extrabold text-[2rem] text-center">
                      The new balance 1983 classic model
                    </h3>

                    <div className="text-center">
                      <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
                        Check Article
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Adverts;
