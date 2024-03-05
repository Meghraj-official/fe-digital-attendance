"use client";
import React, { useEffect, useState } from "react";
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
import { monthsOptions } from "@/lib/data/month";

const AttendanceList = () => {
  const { data: subjects, isLoading: isFetchingCourse } = useQuery(
    ["mysubjects"],
    async () => {
      return (await axiosInstance.get("/subject/student")).data;
    }
  );
  const date = new Date();
  const year = date.getFullYear();
  const defaultMonth = date.getMonth() + 1;

  const [currentSubject, setCurrrentSubject] = useState(
    subjects?.subjects[0]?.code
  );
  const [month, setMonth] = useState(defaultMonth.toString());

  useEffect(() => {
    if (subjects) {
      setCurrrentSubject(subjects?.subjects[0]?.code);
    }
  }, [subjects]);

  const inputMonth = new Date(year, Number(month) - 1, 1);
  console.log("current", currentSubject);

  return (
    <>
      <div className="flex flex-col justify-center gap-4 px-3">
        <div className="flex space-x-4">
          <div className="flex w-40 overflow-hidden gap-2">
            <Select
              onValueChange={(value) => {
                setCurrrentSubject(value);
              }}
              value={currentSubject}
              className="bg-primaryColor-50 h-full w-20   outline-none border  border-primaryColor-800 rounded-md text-center "
            >
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
          <div className="flex w-40 overflow-hidden gap-2">
            <Select
              onValueChange={(value) => {
                setMonth(value);
              }}
              value={month}
              className="bg-primaryColor-50 h-full w-20   outline-none border  border-primaryColor-800 rounded-md text-center "
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Subject" />
              </SelectTrigger>
              <SelectContent className="bg-primaryColor-50 ">
                {monthsOptions?.map((option) => (
                  <SelectItem value={option?.value} key={option.value}>
                    {option?.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <AttendanceListTable
          month={inputMonth}
          isFetchingCourse={isFetchingCourse}
          currentSubject={currentSubject}
        />
      </div>
    </>
  );
};
export default AttendanceList;
