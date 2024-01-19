"use client";
import { PendingTeacher } from "@/components/dashboard/admin/PendingTeacher";
import { PendingStudent } from "@/components/dashboard/admin/PendingStudent";
import React, { useState } from "react";
const PendingUser = () => {
  const [teacherOpen, setTeacherOpen] = useState("true");
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex flex-row justify-start ml-10 gap-4 ">
        <button
          onClick={() => setTeacherOpen("true")}
          className="bg-primaryColor-300 p-2 rounded-md focus:bg-primaryColor-500 focus:text-primaryColor-50"
        >
          Teachers
        </button>
        <button
          onClick={() => setTeacherOpen("false")}
          className="bg-primaryColor-300 p-2 rounded-md  focus:bg-primaryColor-500 focus:text-primaryColor-50"
        >
          Students
        </button>
      </div>
      <div className="h-[70vh] w-[95%] mt-10 ml-10 overflow-y-auto  bg-primaryColor-100">
        {teacherOpen === "true" && <PendingTeacher />}
        {teacherOpen === "false" && <PendingStudent />}
      </div>
    </div>
  );
};
export default PendingUser;
