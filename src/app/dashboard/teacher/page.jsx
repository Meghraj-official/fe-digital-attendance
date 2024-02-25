"use client"
import axiosInstance from "@/lib/axios";
import React from "react";
import { useQuery } from "react-query";

const Teacher = () => {


  const {
    data,
  } = useQuery("teacherInfo", async () => {
    return (await axiosInstance.get("/user/showme")).data;
  });
console.log('dtata', data)
  return <div>Teacher Dashboard.</div>;
};

export default Teacher;
