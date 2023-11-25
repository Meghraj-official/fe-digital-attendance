import React from "react";
import { cn } from "@/lib/utils";

const Button = ({ className, buttonText }) => {
  const hoverStyle =
    "hover:bg-gradient-to-bl hover:from-primaryColor-600 hover:to-primaryColor-900 ";
  return (
    <button
      className={cn(
        "  flex justify-center rounded-full items-center bg-gradient-to-tr from-primaryColor-500 to-primaryColor-700   ",
        className,
        hoverStyle
      )}
    >
      {buttonText}
    </button>
  );
};

export default Button;
