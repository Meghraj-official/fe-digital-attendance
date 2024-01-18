"use client";
import React from "react";
import Signupform from "@/components/Signup/Signupform";
import { useSearchParams } from "next/navigation";
import SignupStudentForm from "@/components/signupstudent/SignupStudentForm";
const Signup = () => {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  return <>{type === "teacher" ? <Signupform /> : <SignupStudentForm />}</>;
};

export default Signup;
