"use client";

import React, { useContext } from "react";
import { Menu } from "lucide-react";
import { SidebarContext } from "@/context/SidebarContext";
import QRBox from "../../teacher/QRBox";

const Navbar = () => {
  const { open, setOpen } = useContext(SidebarContext);

  return (
    <>
      <div className=" py-5 px-2 m-8 max-sm:py-5 bg-primaryColor-100 backdrop-blur-lg rounded-md flex justify-between ">
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
          <div>
            <QRBox />
          </div>

          <div className="relative h-14 w-14 rounded-full bg-primaryColor-600 max-sm:h-8 max-sm:w-8">
            <img
              className=" absolute w-full h-full object-cover rounded-full"
              src="/images/admin.png "
              alt="admin logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
