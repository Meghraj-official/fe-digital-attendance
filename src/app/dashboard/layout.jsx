"use client";

import React from "react";
import Sidebar from "@/components/dashboard/common/sidebar/Sidebar";
import Navbar from "@/components/dashboard/common/navbar/Navbar";
import SidebarContextProvider from "@/context/SidebarContext";
import AuthWrapper from "@/components/common/AuthWrapper";

const Layout = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <AuthWrapper>
      <SidebarContextProvider>
        <div className="flex">
          <Sidebar />
          <div className=" w-full lg:ml-72 flex flex-col text-center bg-white text-black h-screen ">
            <Navbar /> <div> {children} </div>
          </div>
        </div>
      </SidebarContextProvider>
    </AuthWrapper>
  );
};

export default Layout;
