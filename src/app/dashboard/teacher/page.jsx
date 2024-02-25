"use client";
import HomeInfo from "@/components/dashboard/teacher/HomeInfo";
import axiosInstance from "@/lib/axios";
import React from "react";
import { useQuery } from "react-query";

const Teacher = () => {
  const { data } = useQuery("teacherInfo", async () => {
    return (await axiosInstance.get("/user/showme")).data;
  });
  return (
    <>
      <HomeInfo teacherData={data} />
    </>
  );
};

export default Teacher;
