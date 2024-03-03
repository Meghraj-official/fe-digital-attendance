"use client";
import TableComponent from "@/components/Table";
import { useCourseStore } from "@/store/courseStore";
import React from "react";
import { useQuery } from "react-query";

const AttendanceListTable = () => {
  const { data, isLoading } = useQuery("courses", async () => {
    return useCourseStore.getState().getCourses();
  });

  const tableHeader = [
    { label: "SN", accessorKey: "index" },
    { label: "Name", accessorKey: "name" },
    {
      label: "Subject",
      accessorKey: "subject",
    },
    {
      label: "Date",
      accessorKey: "date",
    },
    {
      label: "Status",
      accessorKey: "status",
    },
  ];

  return (
    <>
      {/* <div className="flex flex-col justify-center gap-4 px-3"> */}

      <div className=" place-self-center  h-auto w-[75dvw] bg-primaryColor-100  ">
        <TableComponent
          isLoading={isLoading}
          tableBody={data?.courses}
          tableHeader={tableHeader}
        />
      </div>
      {/* </div> */}
    </>
  );
};
export default AttendanceListTable;
