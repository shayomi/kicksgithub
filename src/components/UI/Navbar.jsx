import React, { useState } from "react";
import Img1 from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
// import { HiShoppingCart } from "react-icons/hi";
// import { CgProfile } from "react-icons/cg";
import HeaderButton from "../Layout/HeaderButton";
import { Allproduct } from "../../Data/StoreData/AllproductData";

import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import SearchBar from "../Layout/SearchBar";

const Navbar = (props) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full bg-[#aafaeb] fixed z-40 ">
      <div className="flex justify-between gap-5 pt-6 h-16 mb-3 max-w-[1240px] mx-auto px-3 text-[#188571] text-sm">
        <NavLink to="/">
          <img className="w-[8rem] mx-auto " src={Img1} />
        </NavLink>
        <div className="lg:flex md:flex sm:hidden">
          <SearchBar placeholder="Search products" data={Allproduct} />
        </div>
        <ul className="hidden lg:flex gap-8">
          <li className="px-2 py-2 rounded-lg duration-500 ease-in-out hover:bg-[#188571] hover:text-white">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="px-2 py-2 rounded-lg duration-500 ease-in-out hover:bg-[#188571] hover:text-white">
            <NavLink
              to="store"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Store
            </NavLink>
          </li>
          <li className="px-2 py-2 rounded-lg duration-500 ease-in-out hover:bg-[#188571] hover:text-white">
            <NavLink
              to="Blog"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Blog
            </NavLink>
          </li>
          <li className="px-2 py-2 rounded-sm duration-500 ease-in-out hover:bg-[#188571] hover:text-white">
            <NavLink
              to="About"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              About
            </NavLink>
          </li>
          <li className="px-2 py-2 rounded-lg duration-500 ease-in-out hover:bg-[#188571] hover:text-white">
            <NavLink
              to="contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Contact
            </NavLink>
          </li>
        </ul>
        <HeaderButton onClick={props.onShowCart} />
        <div onClick={handleNav} className="block lg:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full justify-center text-white text-lg border-r-gray-900 bg-[#114139] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed h-full left-[-100%]"
          }
        >
          <a href="#">
            <img className="w-40 p-7 mx-4  " src={Img1} />
          </a>
          <div className="w-[90%] mx-auto text-black">
            <SearchBar placeholder="Search products" data={Allproduct} />
          </div>
          <li className="p-7 mx-4 ">
            <NavLink
              onClick={handleNav}
              to="/"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="p-7 mx-4 ">
            {" "}
            <NavLink
              onClick={handleNav}
              to="store"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Store
            </NavLink>
          </li>
          <li className="p-7 mx-4 ">
            <NavLink
              onClick={handleNav}
              to="Blog"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Blog
            </NavLink>
          </li>
          <li className="p-7 mx-4 ">
            <NavLink
              onClick={handleNav}
              to="About"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              About
            </NavLink>
          </li>
          <li className="p-7 mx-4 ">
            <NavLink
              onClick={handleNav}
              to="contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              end
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
