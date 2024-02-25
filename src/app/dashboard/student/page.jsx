"use client"
import StudentStats from "@/components/dashboard/student/Studentstats";
import React from "react";
import Info from "@/components/dashboard/student/Info";
import axiosInstance from "@/lib/axios";
import { useQuery } from "react-query";



const Student = () => {
  const { data } = useQuery("profile", async () => {


    return (await axiosInstance.get("/user/showme"))?.data
  })
  console.log(data);
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs >= 4 && hrs < 12)
    greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17)
    greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs < 20)
    greet = 'Good Evening';
  else if ((hrs > 20 && hrs <= 24) || (hrs >= 0 && hrs < 4))
    greet = "Good Night";
  console.log(hrs)
  return (
    <>
    <div className=" flex flex-col justify-between  h-[80vh]  gap-6  ">
      <div className="w-full  flex-col   h-full text-left font-poppins pl-5   ">
        <h2 className="text-base  md:text-xl  text-primaryColor-950 font-semibold tracking-wide  mt-2 "> {greet}, <span className="font-normal text-primaryColor-700 ">{data?.fullName}</span> </h2>

      </div>

      <div className="flex flex-col-reverse justify-center items-center lg:flex-row lg:h-full  gap-5 lg:gap-52 lg:items-start ">
        
        <StudentStats />
        <Info data={data} />
      </div>



    </div></>
  )

};

export default Student;
