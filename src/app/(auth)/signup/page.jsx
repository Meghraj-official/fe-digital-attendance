"use client";
import React from "react";
import Signupform from "@/components/Signup/Signupform";
import AuthWrapper from "@/components/common/AuthWrapper";
const Signup = () => {
  return (
    <AuthWrapper>
      <Signupform />
    </AuthWrapper>
  );
};

export default Signup;
