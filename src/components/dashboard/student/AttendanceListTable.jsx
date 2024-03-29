"use client";
import React, { useEffect, useState } from "react";
import {
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  format,
  isSaturday,
} from "date-fns";
import { useQuery } from "react-query";
import axiosInstance from "@/lib/axios";
import { CompareDates } from "@/lib/helpers/ComparesDate";
import TableComponent from "@/components/Table";

const DateListWithoutSaturdays = ({
  month,
  isFetchingCourse,
  currentSubject,
}) => {
  const [datesWithoutSaturdays, setDatesWithoutSaturdays] = useState([]);

  const date = new Date(month);

  const paramMonth = date.getMonth() + 1;

  const { data, isLoading } = useQuery(
    ["attendanceListStudent", paramMonth, currentSubject],
    async () => {
      return await axiosInstance.get(`/attendance/list/student`, {
        params: {
          month: paramMonth,
          subjectCode: currentSubject,
        },
      });
    }
  );

  console.log(
    "current subjects and date",
    isFetchingCourse,
    paramMonth,
    currentSubject
  );

  const presentDays =
    data?.data?.attendance?.flatMap?.((item) => {
      const newDate = new Date(item?.date);
      return newDate.toISOString();
    }) || [];

  useEffect(() => {
    // Check if a valid month prop is provided
    if (!month || !(month instanceof Date)) {
      console.error("Invalid month prop provided.");
      return;
    }

    // Determine the first day of the provided month
    const firstDayOfMonth = startOfMonth(month);

    // Get the last day of the provided month
    const lastDayOfMonth = endOfMonth(month);

    // Generate an array of all days in the provided month
    const allDaysOfMonth = eachDayOfInterval({
      start: firstDayOfMonth,
      end: lastDayOfMonth,
    });

    // Filter out Saturdays
    const weekdaysOfMonthExceptSaturdays = allDaysOfMonth.filter(
      (day) => !isSaturday(day)
    );

    // Set the state with the result
    setDatesWithoutSaturdays(weekdaysOfMonthExceptSaturdays);
  }, [month]);
  // console.log("datesWithoutSaturdays", datesWithoutSaturdays);

  const formattedDays = datesWithoutSaturdays?.map((day) =>
    format(day, "yyyy-MM-dd")
  );
  const resultData = CompareDates(formattedDays, presentDays);

  return (
    <>
      <TableComponent
        isLoading={isLoading}
        tableBody={resultData}
        tableHeader={tableHeader}
      />
    </>
  );
};

export default DateListWithoutSaturdays;

const tableHeader = [
  { label: "Date", accessorKey: "date" },
  { label: "Attendance status", accessorKey: "status" },
];
