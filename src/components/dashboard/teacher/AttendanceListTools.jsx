import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FormatAssignSubjects } from "@/lib/helpers/FormatAssignSubjects";
import { useTeacherStore } from "@/store/teacherData";
import { batchOptions, sectionOptions } from "@/lib/data/signup";
import { format } from "date-fns";
import { useQuery } from "react-query";
import axiosInstance from "@/lib/axios";
import TableComponent from "@/components/Table";
import { AddStatusField } from "@/lib/helpers/TeacherTableHelper";

const AttendanceListTools = () => {
  const { teacherData, getTeacher } = useTeacherStore();

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const [date, setDate] = useState(currentDate);
  const [subject, setSubject] = useState(
    teacherData?.assignedSubjects?.[0]?.code
  );
  const [section, setSection] = useState("A");
  const [batch, setBatch] = useState(year);

  const inputParams = {
    date: format(date, "yyyy-MM-dd"),
    subjectCode: subject,
    section: section,
    batch,
  };

  useEffect(() => {
    getTeacher();
  }, []);

  useEffect(() => {
    if (teacherData) {
      setSubject(teacherData?.assignedSubjects?.[0]?.code);
    }
  }, [teacherData]);

  const { data: TableData, isLoading } = useQuery(
    ["teacherAttendanceList", subject, date, batch, section],
    async () => {
      return await axiosInstance.get(`/attendance/list/teacher`, {
        params: inputParams,
      });
    },
    {
      enabled: !!subject,
    }
  );

  const { attendance, students } = TableData?.data || {};
  console.log("Table Data", TableData);

  const presentStudentId = attendance?.flatMap((item) => item?.studentId?._id);

  // const FinalResult =
  //   students && attendance && AddStatusField(students, presentStudentId);
  const FinalResult =
    attendance?.length === 0
      ? []
      : students && attendance && AddStatusField(students, presentStudentId);

  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <h1 className="text-2xl md:text-3xl text-primaryColor-900 my-3  text-center  font-bold">
        Attendance List
      </h1>

      <div className="flex gap-5 items-center justify-center lg:items-start flex-wrap w-full  md:justify-end ">
        <div className=" rounded-md min-w-[225px] max-w-fit ">
          <Select
            onValueChange={(value) => {
              setSubject(value);
            }}
            value={subject}
            className="bg-primaryColor-50 h-full outline-none border border-primaryColor-800 rounded-md text-center text-sm lg:text-sm  "
          >
            <SelectTrigger>
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent className="bg-primaryColor-50 ">
              {FormatAssignSubjects(teacherData?.assignedSubjects)?.map(
                (option) => {
                  return (
                    <SelectItem value={option.value} key={option.value}>
                      {option?.label}
                    </SelectItem>
                  );
                }
              )}
            </SelectContent>
          </Select>
        </div>

        <DatePicker
          className="border py-1.5 border-black  rounded-md p-1"
          selected={date}
          onChange={(myDate) => {
            if (date !== myDate) {
              setDate(myDate);
            }
          }}
          placeholderText={"dd/mm/yyyy"}
          filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
          showYearDropdown
          scrollableYearDropdown
        />

        <div className=" rounded-md min-w-[225px] max-w-fit ">
          <Select
            onValueChange={(value) => {
              setSection(value);
            }}
            defaultValue="A"
            className="bg-primaryColor-50 h-full outline-none border border-primaryColor-800 rounded-md text-center text-sm lg:text-sm  "
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Sections" />
            </SelectTrigger>
            <SelectContent className="bg-primaryColor-50 ">
              {sectionOptions?.map((option) => {
                return (
                  <SelectItem value={option.value} key={option.value}>
                    {option?.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        <div className=" rounded-md min-w-[225px] max-w-fit ">
          <Select
            onValueChange={(value) => {
              setBatch(value);
            }}
            defaultValue={year?.toString()}
            className="bg-primaryColor-50 h-full outline-none border border-primaryColor-800 rounded-md text-center text-sm lg:text-sm  "
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Batch" />
            </SelectTrigger>
            <SelectContent className="bg-primaryColor-50 ">
              {batchOptions?.map((option) => {
                return (
                  <SelectItem value={option.value} key={option.value}>
                    {option?.label}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <TableComponent
          isLoading={isLoading}
          tableBody={FinalResult}
          tableHeader={tableHeader}
        />
      </div>
    </div>
  );
};

export default AttendanceListTools;

const tableHeader = [
  { label: "Name", accessorKey: "fullName" },
  {
    label: "Roll No",
    accessorKey: "rollNo",
  },

  {
    label: "Status",
    accessorKey: "status",
  },
];
