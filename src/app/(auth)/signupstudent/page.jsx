"use client";

import React from "react";
import { useAuthStore } from "@/store/authStore";
// import Signupform from "@/components/Signup/Signupform";
import SignupStudentForm from "@/components/signupstudent/SignupStudentForm";
const SignupStudent = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const { isAuth } = useAuthStore();

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading || isAuth) {
    return "loading";
  }
  return (
    <div>
      <SignupStudentForm />
    </div>
  );
};

export default SignupStudent;
