"use client";
import Loginform from "@/components/Login/Loginform";
import React from "react";
import AuthWrapper from "@/components/common/AuthWrapper";

const Login = () => {
  return (
    <AuthWrapper>
      <Loginform />
    </AuthWrapper>
  );
};

export default Login;
