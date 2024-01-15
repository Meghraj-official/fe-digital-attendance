"use client";

import React from "react";
// import Loginform from "@/components/login/Loginform";
import { useAuthStore } from "@/store/authStore";
import Loginform from "@/components/Login/Loginform";

const Login = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  const { isAuth } = useAuthStore();

  React.useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading || isAuth) {
    return "loading";
  }
  return <Loginform />;
};

export default Login;
