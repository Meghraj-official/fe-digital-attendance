"use client";
import { HomeIcon, XIcon } from "lucide-react";

import { LogOut } from "lucide-react";
import React, { useContext } from "react";
import { Settings } from "lucide-react";
import { User } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { SidebarContext } from "@/context/SidebarContext";

const Sidebar = () => {
  const { open, setOpen } = useContext(SidebarContext);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`sm:none duration-175 linear w-72 fixed !z-50 flex min-h-full flex-col bg-primaryColor-100 pb-10 shadow-2xl shadow-white/5 transition-all  md:!z-50 lg:!z-50 xl:!z-0 ${
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
      <div
        // style={{ backgroundImage: `url("/images/logoda.png")` }}
        // className="  h-40 w-full text-xl  text-center bg-red-500 font-bold"
        className="flex justify-center py-10 shadow-sm"
      >
        <img
          // className=" absolute object-top   object-contain scale-50  "
          className="w-auto h-20 "
          src="/images/DA.png"
          alt="logo"
        />
        {/* <h1>Digital Attendance</h1> */}
      </div>
      {/* Nav Links Here */}

      <div className="h-80 relative  py-20 ">
        <div
          className={` ${
            pathname === "/dashboard"
              ? "border-r-4 border-primaryColor-800"
              : "border-none"
          }`}
        >
          <button
            onClick={() => {
              router.push("/dashboard");
            }}
            className={`py-2  px-5 w-full items-center gap-10 flex  cursor-pointer rounded-sm ${
              pathname === "/dashboard" ? "bg-primaryColor-200" : ""
            } `}
          >
            <HomeIcon
              className={`h-5 w-5  text-primaryColor-500 ${
                pathname === "/dashboard" ? "fill-primaryColor-300 " : " "
              }`}
            />
            <p
              className={`text-md font-poppins text-primaryColor-500 ${
                pathname === "/dashboard"
                  ? "text-primaryColor-800 border-primaryColor-800 "
                  : ""
              }`}
            >
              Home
            </p>
            {/* <div
              className={`h-8 w-1 bg-primaryColor-500 rounded-md absolute right-0 ${
                pathname === "/dashboard" ? "visible" : "invisible"
              }`}
            ></div> */}
          </button>
        </div>
        <div
          className={` ${
            pathname === "/dashboard/profile"
              ? "border-r-4 border-primaryColor-800"
              : "border-none"
          }`}
        >
          <button
            onClick={() => {
              router.push("/dashboard/profile");
            }}
            className={`py-2  px-5 w-full items-center gap-10 flex  cursor-pointer rounded-sm  ${
              pathname === "/dashboard/profile" ? "bg-primaryColor-200" : ""
            }`}
          >
            <User
              className={`h-5 w-5  text-primaryColor-500 ${
                pathname === "/dashboard/profile"
                  ? "fill-primaryColor-300"
                  : " "
              }`}
            />
            <p
              className={`text-md font-poppins text-primaryColor-500 ${
                pathname === "/dashboard/profile"
                  ? "text-primaryColor-800 border-primaryColor-800 "
                  : ""
              }`}
            >
              {" "}
              Profile
            </p>
          </button>
        </div>
        <div
          className={` ${
            pathname === "/dashboard/setting"
              ? "border-r-4 border-primaryColor-800"
              : "border-none"
          }`}
        >
          <button className="py-2  px-5 w-full items-center gap-10 flex  cursor-pointer rounded-sm hover:bg-primaryColor-200">
            <Settings className="h-5 w-5 text-primaryColor-500 " />
            <p className="text-md font-poppins  text-primaryColor-500">
              {" "}
              Setting
            </p>
          </button>
        </div>
      </div>
      {/* Logout button here */}
      <button
        onClick={() => {
          location.href = "./login";
        }}
        className="absolute flex justify-center inset-x-0 bottom-0 py-3 px-2 text-center bg-primaryColor-400"
      >
        Logout <LogOut className="ml-2" />
      </button>
    </div>
  );
};

export default Sidebar;
