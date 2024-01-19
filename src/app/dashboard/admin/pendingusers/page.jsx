"use client";
import { PendingTeacher } from "@/components/dashboard/admin/PendingTeacher";
import { PendingStudent } from "@/components/dashboard/admin/PendingStudent";
import React, { useEffect, useState } from "react";
import axiosInstance from "@/lib/axios";
import { useQuery } from "react-query";
import { useAuthStore } from "@/store/authStore";
const PendingUser = () => {
  const { token } = useAuthStore();
  const [teacherOpen, setTeacherOpen] = useState("true");

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
        {teacherOpen === "true" && (
          <PendingTeacher
            isLoading={isPending}
            refetch={refetchTeacher}
            teacherData={teachersData?.data?.teachers}
          />
        )}
        {teacherOpen === "false" && (
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
