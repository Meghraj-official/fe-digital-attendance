"use client";
import StudentStats from "@/components/dashboard/student/Studentstats";
import React from "react";
import Info from "@/components/dashboard/student/Info";
import axiosInstance from "@/lib/axios";
import { useQuery } from "react-query";

const Student = () => {
  const { data } = useQuery("profile", async () => {
    return (await axiosInstance.get("/user/showme"))?.data;
  });

  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs >= 4 && hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 20) greet = "Good Evening";
  else if ((hrs > 20 && hrs <= 24) || (hrs >= 0 && hrs < 4))
    greet = "Good Night";

  return (
    <div className="flex flex-col justify-between h-[80vh]   ">
      {/* <Navbar type="student" /> */}
      <div className="w-full flex flex-col justify-end  h-full text-left font-poppins pl-5 mb-5 ">
        <h2 className="text-base lg:text-xl  text-primaryColor-950 font-semibold tracking-wide mt-3 ">
          {" "}
          {greet},{" "}
          <span className="font-normal text-primaryColor-700 ">
            {data?.fullName}
          </span>{" "}
        </h2>
      </div>
      <div className="flex flex-col-reverse items-center lg:items-start  lg:flex-row lg:justify-around gap-5 ">
        <StudentStats />
        <Info data={data} />
      </div>
    </div>
  );
};

export default Student;
