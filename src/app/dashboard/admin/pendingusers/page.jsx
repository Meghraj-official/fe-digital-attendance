"use client";
import React, { useEffect, useState } from "react";
import { PendingTeacher } from "@/components/dashboard/admin/PendingTeacher";
import { PendingStudent } from "@/components/dashboard/admin/PendingStudent";
import axiosInstance from "@/lib/axios";
import { useQuery } from "react-query";
import { useAuthStore } from "@/store/authStore";

const tab = ["teacher", "student"];

const PendingUser = () => {
  const { token } = useAuthStore();
  const [activeTab, setActiveTab] = useState("teacher");

  const handleGetPendingStudents = () => {
    const res = axiosInstance.get("/user/pending-students", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return res;
  };
  const handleGetPendingTeachers = () => {
    const res = axiosInstance.get("/user/pending-teachers", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return res;
  };

  useEffect(() => {
    handleGetPendingStudents();
    handleGetPendingTeachers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex flex-row justify-start ml-10 gap-4 ">
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
      <div className="h-[70vh] w-[95%] mt-10 ml-10 overflow-y-auto  bg-primaryColor-100">
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
