"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavigationButton = ({ IconName, pathName, labelName }) => {
  // const router = useRouter();
  const pathname = usePathname();
  return (
    <div
      className={` ${
        pathname === `${pathName}`
          ? "border-r-4 border-primaryColor-800 text-primaryColor-800"
          : "border-none"
      }`}
    >
      <Link href={pathName}>
        <button
          className={`py-2  px-5 w-full items-center gap-10 flex  cursor-pointer hover:bg-primaryColor-200 rounded-sm ${
            pathname === `${pathName}` ? "bg-primaryColor-200" : ""
          } `}
        >
          <IconName className={`h-5 w-5  text-primaryColor-500 `} />
          <p className={`text-md font-poppins text-primaryColor-500 `}>
            {labelName}
          </p>
        </button>
      </Link>
    </div>
  );
};

export default NavigationButton;
