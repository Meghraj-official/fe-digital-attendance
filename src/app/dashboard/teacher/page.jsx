"use client";
import HomeInfo from "@/components/dashboard/teacher/HomeInfo";
import { useTeacherStore } from "@/store/teacherData";
import React, { useEffect } from "react";

const Teacher = () => {
  const { getTeacher, teacherData } = useTeacherStore();

  useEffect(() => {
    getTeacher();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <HomeInfo teacherData={teacherData} />
    </>
  );
};

export default Teacher;
