import React from "react";
import abg from "../../assets/tryout1.JPG";

import { LuPhone, LuMails, LuAlarmClock } from "react-icons/lu";

const Contact = () => {
  return (
    <section className="pt-[4rem] w-full h-[100%]">
      <div
        style={{
          backgroundImage: `url(${abg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        className="w-full "
      >
        <div className="w-[100%] mx-1 lg:flex lg:flex-row justify-between py-10 backdrop-brightness-50 px-10 md:flex-col md:mx-auto sm:mx-auto sm:flex-col">
          <div className="w-[100%] flex flex-col gap-5 py-10">
            <div>
              <h1 className="font-bold text-3xl text-white ml-6">Contact Us</h1>
              <p className="leading-8 text-white py-6 text-xl lg:w-[60%] lg:mx-1 md:w-[90%] md:mx-auto sm:w-[90%] sm:mx-auto ">
                We design, build and support websites and apps for clients
                worldwide. We make your business stand out. Interested? Let's
                chat.
              </p>
            </div>
            <div className="flex lg:flex-row lg:mx-1 text-center gap-5 py-10 md:flex-col sm:flex-col md:w-[70%] md:mx-auto sm:w-[70%] sm:mx-auto">
              <div className="lg:px-7 md:px-0 py-10 bg-white leading-[5rem] duration-500 ease-in-out hover:bg-[#188571] hover:cursor-pointer">
                <LuPhone size={50} className="text-black mx-auto" />
                <h2 className="text-black text-xl py-5 font-bold">Phone</h2>
                <p className="text-black text-xl font-medium">+2348122953255</p>
              </div>
              <div className="px-7 py-10 bg-white leading-10 duration-500 ease-in-out hover:bg-[#188571] hover:cursor-pointer">
                <LuMails size={50} className="text-black mx-auto " />
                <h2 className="text-black text-xl py-5 font-bold">Email</h2>
                <p className="text-black  text-xl">info@kicks.com</p>
              </div>
              <div className="px-7 py-10 bg-white leading-10 duration-500 ease-in-out hover:bg-[#188571] hover:cursor-pointer">
                <LuAlarmClock size={50} className="text-black mx-auto " />
                <h2 className="text-black  text-xl py-5 font-bold">
                  Opening Hours
                </h2>
                <p className="text-black  text-xl">9 - 5PM</p>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%] flex flex-col py-10 md:w-[80%] sm:w-[96%] mx-auto ">
            <div className="flex flex-col gap-3 bg-[#188571] px-4 py-7">
              <div>
                <h1 className="text-white font-bold text-xl">
                  What is on your mind? we are here to listen
                </h1>
              </div>
              <div className="py-6">
                <form className="flex flex-col gap-7">
                  <input
                    type="name"
                    placeholder="Full Name"
                    className="justify-self-stretch h-[40px] rounded-xl bg-white px-2 py-3"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="justify-self-stretch h-[40px] rounded-xl bg-white px-2 py-3"
                  />
                  <input
                    type="number"
                    placeholder="Phone Number"
                    className="justify-self-stretch h-[40px] rounded-xl bg-white px-2 py-3"
                  />
                  <textarea
                    type="text"
                    placeholder="Project Description"
                    className="justify-self-stretch h-[70px] rounded-xl bg-white px-2 py-3"
                  />
                </form>
              </div>
              <div className="bg-black text-[#188571]  hover:bg-[#aafaeb] hover:text-black rounded-md font-medium mx-5 my-3 p-2">
                <button
                  type="submit"
                  className="lg:px-[7rem] md:px-[4rem] sm:px-10"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
