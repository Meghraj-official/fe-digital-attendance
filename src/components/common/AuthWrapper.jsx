import isAuth from "@/hoc/isAuth";
import React from "react";

const AuthWrapper = ({ children }) => {
  return <div>{children}</div>;
};

export default isAuth(AuthWrapper);
