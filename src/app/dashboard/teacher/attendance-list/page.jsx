"use client";
// import AttendanceListTable from "@/components/dashboard/teacher/AttendanceListTable";
import AttendanceListTools from "@/components/dashboard/teacher/AttendanceListTools";
import React from "react";

const Index = () => {
  return (
    <div className="flex flex-col gap-4">
      <AttendanceListTools />
      {/* <AttendanceListTable /> */}
    </div>
  );
};

export default Index;
