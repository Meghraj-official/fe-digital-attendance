"use client";

import React, { useContext } from "react";
import { SidebarContext } from "@/app/dashboard/layout";
import { Brain } from "lucide-react";

const Navbar = () => {
  const { open, setOpen } = useContext(SidebarContext);

  return (
    <div className="  p-3 m-8 bg-slate-100 backdrop-blur-lg rounded-md flex justify-between ">
      {/* Headings Here L */}
      <div className="flex font-poppins flex-col gap-2 text-left ">
        <h2 className="text-md  font-thin"> page / Home pages </h2>
        <h1 className="text-2xl font-bold "> John Doe </h1>
      </div>

      {/* Search Bar and buttons here */}
      <div className="flex gap-2 items-center ">
        <span
          className="  block lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <Brain className="h-5 w-5" />
        </span>
        <input
          type="text"
          className="h-10 w-lg pl-5 border border-black rounded-full"
          placeholder="Search here"
        />
      </div>
    </div>
  );
};

export default Navbar;
