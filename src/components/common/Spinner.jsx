import React from "react";

const Spinner = ({ className }) => {
  return (
    <div className="flex justify-center items-center ">
      <div
        className={`animate-spin rounded-full h-5 w-5 border-t-3 border-blue-500 ${className}`}
      ></div>
    </div>
  );
};

export default Spinner;
