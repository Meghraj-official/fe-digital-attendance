"use client";
import React from "react";
import Signupform from "@/components/Signup/Signupform";
import { useSearchParams } from "next/navigation";
import SignupStudentForm from "@/components/signupstudent/SignupStudentForm";
import AuthWrapper from "@/components/common/AuthWrapper";
const Signup = () => {
  const searchParams = useSearchParams();

  const type = searchParams.get("type");

  return (
    <AuthWrapper>
      {type === "teacher" ? <Signupform /> : <SignupStudentForm />}
    </AuthWrapper>
  );
};

export default Signup;
