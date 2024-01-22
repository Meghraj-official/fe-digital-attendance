/* eslint-disable @next/next/no-img-element */
"use client";

import { LogOut, XIcon } from "lucide-react";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import { SidebarContext } from "@/context/SidebarContext";
import { useAuthStore } from "@/store/authStore";
import {
  adminNavigation,
  studentNavigation,
  teacherNavigation,
} from "@/lib/data/dashboard";
import NavigationButton from "../navbar/NavigationButton";
import { userCategory } from "@/lib/data/user";

const Sidebar = () => {
  const { open, setOpen } = useContext(SidebarContext);
  const router = useRouter();

  const { setAuth, userType } = useAuthStore();

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
      <div className="flex justify-center py-10 shadow-sm">
        <img
          // className=" absolute object-top   object-contain scale-50  "
          className="w-auto h-20 "
          src="/images/DA.png"
          alt="logo"
        />
      </div>
      {/* Nav Links Here */}

      <div className="h-80 relative  py-20 ">
        {userType === userCategory.student
          ? studentNavigation.map((item) => (
              <NavigationButton
                labelName={item.label}
                pathName={item.pathName}
                IconName={item.icon}
                key={item.id}
              />
            ))
          : userType === userCategory.teacher
          ? teacherNavigation.map((item) => (
              <NavigationButton
                labelName={item.label}
                pathName={item.pathName}
                IconName={item.icon}
                key={item.id}
              />
            ))
          : adminNavigation.map((item) => (
              <NavigationButton
                labelName={item.label}
                pathName={item.pathName}
                IconName={item.icon}
                key={item.id}
              />
            ))}
      </div>
      {/* Logout button here */}
      <button
        onClick={() => {
          router.push("/login");
          setAuth({
            isAuth: false,
            token: null,
          });
        }}
        className="absolute flex justify-center inset-x-0 bottom-0 py-3 px-2 text-center bg-primaryColor-400"
      >
        Logout <LogOut className="ml-2" />
      </button>
    </div>
  );
};

export default Sidebar;
