"use client";

import React from "react";
import Signupform from "../../../components/signup/Signupform";
import { useAuthStore } from "@/store/authStore";
const Signup = () => {
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
      <Signupform />
    </div>
  );
};

export default Signup;
