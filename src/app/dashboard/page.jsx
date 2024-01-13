"use client";
import { TableDemo } from "@/app/table";
import DialogBox from "@/components/DialogBox";
import { useState } from "react";

import { useAuthStore } from "@/store/authStore";

const Dashboard = () => {
  const { userType } = useAuthStore();
  console.log("user type", userType);
  // const [openBox, setOpenBox] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-2  items-center  px-5  ">
        <DialogBox />
        <div className="h-80  w-[95%] overflow-y-scroll  bg-primaryColor-100">
          <TableDemo />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
[];
