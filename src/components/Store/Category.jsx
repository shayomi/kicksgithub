import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Allproduct } from "../../Data/StoreData/AllproductData";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const Category = ({ props }) => {
  const [data, setData] = useState(Allproduct);
  const filterResult = (catItem) => {
    const result = Allproduct.filter((curData) => {
      return curData.category === catItem;
    });
    setData(result);
  };

  const [cat, setCat] = useState(false);

  const handleCat = () => {
    setCat(!cat);
  };

  return (
    <div className="w-full bg-[#1b554a] ">
      <div className="flex justify-start gap-10 items-center h-12 max-w-[1240px] mx-auto px-3 text-[#188571] text-sm">
        <h3 className="text-black font-bold text-xl">Categories :</h3>
        <ul className="md:flex md:flex-row md:gap-5 text-white sm:hidden">
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => setData(Allproduct)}>
              All
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Men")}>
              Men
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Women")}>
              Women
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Children")}>
              Children
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Sport")}>
              Sports
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Rugged")}>
              Ruggeds
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Rugged")}>
              Brands
            </button>
          </li>
        </ul>
        <div onClick={handleCat} className="block md:hidden">
          {cat ? (
            <AiOutlineClose size={20} />
          ) : (
            <IoIosArrowDropdownCircle size={20} />
          )}
        </div>
        <ul
          className={
            cat
              ? "flex flex-col  z-40  text-black text-lg border-r-gray-900 bg-[#d1faf2] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%]"
          }
        >
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => setData(Allproduct)}>
              All
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Men")}>
              Men
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Women")}>
              Women
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Children")}>
              Children
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Sport")}>
              Sports
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Rugged")}>
              Ruggeds
            </button>
          </li>
          <li className="px-2 py-1 rounded-md duration-300 hover:bg-[#92f7e4] hover:text-black">
            <button className="newbtn" onClick={() => filterResult("Rugged")}>
              Brands
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Category;
