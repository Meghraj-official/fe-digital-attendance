"use client";

import React, { useContext, useState } from "react";
import { Menu } from "lucide-react";
import Dropmenu from "../Dropmenu";
import { SidebarContext } from "@/context/SidebarContext";
import DialogBox from "../DialogBox";
const Navbar = () => {
  const { open, setOpen } = useContext(SidebarContext);
  const [isDropdown, setIsDropDown] = useState(false);

  // const menuRef = useRef();

  // window.addEventListener("click", (e) => {});

  const toggleDropdown = () => {
    setIsDropDown(!isDropdown);
  };

  return (
    <>
      <div className=" py-8 px-2 m-8 max-sm:py-5 bg-primaryColor-100 backdrop-blur-lg rounded-md flex justify-between ">
        {/* Headings Here L */}
        {/* <div className="flex font-poppins flex-col gap-2 text-left ">
        <h2 className="text-md  font-thin"> page / Home pages </h2>
        <h1 className="text-2xl font-bold "> John Doe </h1>
      </div> */}

        {/* Search Bar and buttons here */}
        <div className="flex  items-center justify-between  w-full  ">
          <span
            className="  block lg:hidden"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <Menu className="h-10 w-10 max-sm:h-6 max-sm:w-6 text-primaryColor-950 " />
          </span>
          <div className="flex items-center  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className=" absolute w-6 h-6 ml-3 pointer-events-none text-primaryColor-400 max-sm:w-4 max-sm:h-4   "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              className="h-10  pl-10 border border-primaryColor-950 rounded-full max-sm:h-8 max-sm:w-40 max-sm:text-xs max-sm:pl-8"
              placeholder="Search here"
            />
          </div>
          <div className="flex items-center p-2 bg-primaryColor-400 rounded-md hover:bg-primaryColor-200">
            <button>Generate Qr</button>
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleDropdown}
              className="relative h-10 w-10 rounded-full bg-primaryColor-600 max-sm:h-6 max-sm:w-6"
            ></button>
          </div>
        </div>
      </div>
      {isDropdown && (
        <div className="absolute right-1 p-8 mt-20 z-10 transform transition duration-200 translate-y-1 ">
          <Dropmenu />
        </div>
      )}
    </>
  );
};

export default Navbar;
