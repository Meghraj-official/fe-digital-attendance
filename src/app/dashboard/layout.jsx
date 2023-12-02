"use client";

import React, { useState, createContext } from "react";
import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
// @ts-ignore

export const SidebarContext = createContext();

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ open, setOpen }}>
      <div className="flex">
        {/* sidebar */}
        <Sidebar />
        <div className=" w-full lg:ml-72 flex flex-col text-center bg-white text-black h-screen ">
          <Navbar /> <div> {children} </div>
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export default Layout;
