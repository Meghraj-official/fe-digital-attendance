"use client";
import TableComponent from "@/components/Table";
import { useCourseStore } from "@/store/courseStore";
import React from "react";
import { useQuery } from "react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AttendanceList = () => {
  const { data, isLoading } = useQuery("courses", async () => {
    return useCourseStore.getState().getCourses();
  });

  const options = [
    {
      label: "Web Technology",
      value: "web",
    },
    {
      label: "DBMS",
      value: "dbms",
    },
  ];

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
      <div className="flex flex-col justify-center gap-4 px-3">
        <div className="flex w-40 overflow-hidden gap-2">
          {/* <button className="bg-primaryColor-300  place-self-start p-2 mr-10 rounded-md">
            Refresh
          </button> */}
          {/* <button className="bg-primaryColor-300  place-self-start p-2 mr-10 rounded-md">
            Subject
          </button> */}
          <Select
            // defaultValue={value}
            className="bg-primaryColor-50 h-full w-20   outline-none border  border-primaryColor-800 rounded-md text-center "
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent className="bg-primaryColor-50 ">
              {options?.map((option) => (
                <SelectItem value={option?.value} key={option.value}>
                  {option?.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className=" overflow-y-auto h-80 w-[75dvw] bg-primaryColor-100 ">
          {/* <CourseTable /> */}
          <TableComponent
            isLoading={isLoading}
            tableBody={data?.courses}
            tableHeader={tableHeader}
          />
        </div>
      </div>
    </>
  );
};
export default AttendanceList;
