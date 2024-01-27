"use client";
import TableComponent from "@/components/Table";
import AddCourse from "@/components/common/AddCourse";
import axiosInstance from "@/lib/axios";
import React from "react";
import { useQuery } from "react-query";

const Course = () => {
  const { data, isLoading } = useQuery("courses", async () => {
    return (await axiosInstance.get("/course/list")).data;
  });

  const tableHeader = [
    { label: "Course Name", accessorKey: "name" },
    { label: "Course Id", accessorKey: "code" },
    {
      label: "Course Type",
      accessorKey: "courseType",
    },
  ];

  const actions = (
    <div className="flex flex-row gap-2 mt-2">
      <button className="bg-primaryColor-300 p-2 rounded-md">Edit</button>
      <button className="bg-primaryColor-300 p-2 rounded-md">Delete</button>
    </div>
  );

  return (
    <>
      <div className="flex flex-col justify-center gap-4 px-3">
        <button className="bg-primaryColor-300  place-self-end mr-10 rounded-md">
          <AddCourse />
        </button>
        {/* <div className="bg-primaryColor-100 overflow-y-auto h-80 w-[100%] "> */}
        {/* <CourseTable /> */}
        <TableComponent
          isLoading={isLoading}
          tableBody={data?.courses}
          tableHeader={tableHeader}
          actions={actions}
        />
        {/* </div> */}
      </div>
    </>
  );
};
export default Course;
