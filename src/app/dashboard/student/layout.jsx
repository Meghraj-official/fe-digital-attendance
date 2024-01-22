import Navbar from "@/components/dashboard/common/navbar/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div className="flex flex-col">
      <Navbar type="student" />
      {children}
    </div>
  );
};

export default layout;
