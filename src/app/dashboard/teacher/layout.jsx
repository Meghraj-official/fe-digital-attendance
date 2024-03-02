import Navbar from "@/components/dashboard/common/navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar type="teacher" />
      <div className="px-2"> {children}</div>
    </div>
  );
};

export default layout;
