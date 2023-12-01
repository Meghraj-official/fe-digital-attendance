import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ className, buttonText }) => {
  const hoverStyle =
    "hover:bg-gradient-to-bl hover:from-primaryColor-200 hover:via-slate-500 hover:to-primaryColor-600 ";
  return (
    <button
      className={cn(
        "  flex justify-center rounded-full items-center bg-gradient-to-bl from-primaryColor-500 via-slate-700 to-primaryColor-900 max-md:h-10 max-sm:w-24   ",
        className,
        hoverStyle
      )}
    >
      {buttonText}
    </button>
  );
};

export default Button;

// from-primaryColor-500 via-slate-800 to-primaryColor-900
// from-primaryColor-500 to-primaryColor-700
