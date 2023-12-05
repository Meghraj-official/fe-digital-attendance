"use client";
import { HomeIcon, XIcon } from "lucide-react";
import React, { useContext, useState } from "react";
import { SidebarContext } from "@/app/dashboard/layout";

const Sidebar = () => {
  const { open, setOpen } = useContext(SidebarContext);
  return (
    <div
      className={`sm:none duration-175 linear w-72 fixed !z-50 flex min-h-full flex-col bg-gray-100 pb-10 shadow-2xl shadow-white/5 transition-all  md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96 lg:translate-x-0"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer lg:hidden"
        onClick={() => setOpen(false)}
      >
        <XIcon />
      </span>
      {/* Logo here  */}
      <div className=" text-3xl font-bold text-center py-20 ">
        <span className="">Digital</span>
        <br />
        <span className="">Attendance</span>
      </div>
      {/* Nav Links Here */}
      <div className="py-20 ">
        <div className="py-2  px-5 items-center gap-4 flex  cursor-pointer rounded-sm hover:bg-primaryColor-200">
          <HomeIcon className="h-5 w-5 text-primaryColor-500 " />
          <p className="text-md font-poppins"> Home </p>
        </div>
      </div>

      {/* Logout button here */}
      <div className="absolute inset-x-0 bottom-0 py-3 px-2 text-center bg-slate-400">
        {" "}
        Logout button{" "}
      </div>
    </div>
  );
};

export default Sidebar;
