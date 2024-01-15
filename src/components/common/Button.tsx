import React from "react";
import { cn } from "@/lib/utils";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonText: string;
}

const Button: React.FC<Props> = ({ className, buttonText, ...rest }) => {
  const hoverStyle =
    "hover:bg-gradient-to-bl hover:from-primaryColor-700 hover:via-primaryColor-900 hover:to-primaryColor-700 ";
  return (
    <button
      className={cn(
        "  flex justify-center rounded-full items-center bg-gradient-to-bl from-primaryColor-900 via-primaryColor-700 to-primaryColor-900    ",
        className,
        hoverStyle
      )}
      {...rest}
    >
      {buttonText}
    </button>
  );
};

export default Button;

// from-primaryColor-500 via-slate-800 to-primaryColor-900
// from-primaryColor-500 to-primaryColor-700
