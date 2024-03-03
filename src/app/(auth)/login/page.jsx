"use client";
import React from "react";
import AuthWrapper from "@/components/common/AuthWrapper";
import Loginform from "@/components/login/Loginform";

const Login = () => {
  return (
    <AuthWrapper>
      <Loginform />
    </AuthWrapper>
  );
};

export default Login;
