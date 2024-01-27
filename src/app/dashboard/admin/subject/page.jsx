"use client";
import TableComponent from "@/components/Table";
import TableSkeleton from "@/components/common/TableSkeleton";
import AddSubject from "@/components/common/AddSubject";
import axiosInstance from "@/lib/axios";
import React from "react";
import { useQuery } from "react-query";

const Subject = () => {
  const { data } = useQuery("subjects", async () => {
    return (await axiosInstance.get("/subject/list")).data;
  });

  const tableHeader = [
    {
      label: "Subject Name",
      accessorKey: "name",
    },
    {
      label: "Subject Code",
      accessorKey: "code",
    },
  ];
  return (
    <>
      <div className="flex flex-col   justify-center px-3 gap-4 ">
        <button className="bg-primaryColor-300  place-self-end mr-10 rounded-md">
          <AddSubject />
        </button>
        {/* <TableSkeleton /> */}

        <div className="bg-white overflow-y-auto h-80 w-[100%] ">
          {/* <SubjectTable /> */}
          <TableComponent
            isLoading={data?.subjects}
            tableHeader={tableHeader}
            tableBody={data?.subjects}
            // actions={actions}
          />
        </div>
      </div>
    </>
  );
};
export default Subject;
