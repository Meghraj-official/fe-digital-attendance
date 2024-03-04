"use client";
import React from "react";
import { useQuery } from "react-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axiosInstance from "@/lib/axios";
import { FormatAssignSubjects } from "@/lib/helpers/FormatAssignSubjects";
import AttendanceListTable from "@/components/dashboard/student/AttendanceListTable";

const AttendanceList = () => {
  const { data: subjects } = useQuery("mysubjects", async () => {
    return (await axiosInstance.get("/subject/student")).data;
  });
  const date = new Date();
  const year = date.getFullYear();
  const inputMonth = new Date(year, 2, 1);

  return (
    <>
      <div className="flex flex-col justify-center gap-4 px-3">
        <div className="flex w-40 overflow-hidden gap-2">
          <Select className="bg-primaryColor-50 h-full w-20   outline-none border  border-primaryColor-800 rounded-md text-center ">
            <SelectTrigger>
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent className="bg-primaryColor-50 ">
              {FormatAssignSubjects(subjects?.subjects)?.map((option) => (
                <SelectItem value={option?.value} key={option.value}>
                  {option?.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <AttendanceListTable month={inputMonth} />
      </div>
    </>
  );
};
export default AttendanceList;
