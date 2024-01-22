import React from "react";
import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonText: string;
  isLoading: boolean;
}

const Button: React.FC<Props> = ({
  className,
  buttonText,
  isLoading,
  ...rest
}) => {
  const hoverStyle =
    "hover:bg-gradient-to-bl hover:from-primaryColor-700 hover:via-primaryColor-900 hover:to-primaryColor-700 ";
  return (
    <button
      disabled={isLoading}
      className={cn(
        "disabled:cursor-not-allowed flex justify-center rounded-full items-center bg-gradient-to-bl from-primaryColor-900 via-primaryColor-700 to-primaryColor-900    ",
        className,
        hoverStyle
      )}
      {...rest}
    >
      {isLoading ? <Spinner className="border-white" /> : buttonText}
    </button>
  );
};

export default Button;

// from-primaryColor-500 via-slate-800 to-primaryColor-900
// from-primaryColor-500 to-primaryColor-700
