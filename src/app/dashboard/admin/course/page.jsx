"use client";
import TableComponent from "@/components/Table";
import { Badge } from "@/components/ui/badge";
import axiosInstance from "@/lib/axios";
import React from "react";
import { useQuery } from "react-query";

const Course = () => {
  const { data } = useQuery("courses", async () => {
    return (await axiosInstance.get("/course/list")).data;
  });

  console.log(data?.courses);
  const tableHeader = [
    { label: "Course Name", accessorKey: "name" },
    { label: "Course Id", accessorKey: "code" },
    {
      label: "Course Type",
      accessorKey: "courseType",
      component: (rowData) => <Badge variant="outline">{rowData?.name}</Badge>,
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
        <button className="bg-primaryColor-300 p-2 place-self-end mr-10 rounded-md">
          Add Course
        </button>
        {/* <div className="bg-primaryColor-100 overflow-y-auto h-80 w-[100%] "> */}
        {/* <CourseTable /> */}
        <TableComponent
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
