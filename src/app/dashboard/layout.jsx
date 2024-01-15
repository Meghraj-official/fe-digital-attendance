"use client";

import React from "react";
import Sidebar from "@/components/dashboard/common/sidebar/Sidebar";
import Navbar from "@/components/dashboard/common/navbar/Navbar";
import SidebarContextProvider from "@/context/SidebarContext";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <SidebarContextProvider>
      <div className="flex">
        {/* sidebar */}

        <Sidebar />
        <div className=" w-full lg:ml-72 flex flex-col text-center bg-white text-black h-screen ">
          <Navbar /> <div> {children} </div>
        </div>
      </div>
    </SidebarContextProvider>
  );
};

export default Layout;
