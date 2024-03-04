"use client";
import React, { useState } from "react";
import { PendingTeacher } from "@/components/dashboard/admin/PendingTeacher";
import { PendingStudent } from "@/components/dashboard/admin/PendingStudent";
import axiosInstance from "@/lib/axios";
import { useQuery } from "react-query";

const tab = ["teacher", "student"];

const PendingUser = () => {
  const [activeTab, setActiveTab] = useState("teacher");

  const handleGetPendingStudents = () => {
    const res = axiosInstance.get("/user/pending-students");

    return res;
  };
  const handleGetPendingTeachers = () => {
    const res = axiosInstance.get("/user/pending-teachers");

    return res;
  };

  const { data, refetch, isLoading } = useQuery(
    "pendingStudents",
    handleGetPendingStudents
  );
  const {
    data: teachersData,
    refetch: refetchTeacher,
    isLoading: isPending,
  } = useQuery("pendingTeachers", handleGetPendingTeachers);

  return (
    <div className="w-full h-full flex flex-col justify-center px-3">
      <div className="flex flex-row place-self-end mr-10 gap-2 mt-2  ">
        {tab.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={` p-2 capitalize rounded-md focus:bg-primaryColor-500 ${
              activeTab === item
                ? "bg-primaryColor-500 text-primaryColor-50"
                : "bg-primaryColor-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <div className="h-[70vh] w-[100%] mt-2  overflow-y-auto">
        {activeTab === "teacher" && (
          <PendingTeacher
            isLoading={isPending}
            refetch={refetchTeacher}
            teacherData={teachersData?.data?.teachers}
          />
        )}

        {activeTab === "student" && (
          <PendingStudent
            isLoading={isLoading}
            refetch={refetch}
            studentData={data?.data?.students}
          />
        )}
      </div>
    </div>
  );
};
export default PendingUser;
