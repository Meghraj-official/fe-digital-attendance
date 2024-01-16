"use client";
import { useLayoutEffect } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { userCategory } from "@/lib/data/user";

export default function isAuth(Component) {
  return function IsAuth(props) {
    const { isAuth: isAuthenticated, userType } = useAuthStore();
    const pathname = usePathname();
    const auth = isAuthenticated;
    const navigate = useRouter();

    useLayoutEffect(() => {
      if (!auth) {
        return redirect("/login");
      }
    }, [auth]);

    if (pathname.startsWith("/dashboard") && !auth) {
      navigate.push("/login");
    }

    if (
      auth &&
      (pathname.startsWith("/login") || pathname.startsWith("/signup"))
    ) {
      navigate.push(`/dashboard/${userType.toLowerCase()}`);
    }

    if (!auth) {
      return null;
    }

    if (auth) {
      if (
        userType === userCategory.student &&
        (pathname.includes("/teacher") || pathname.includes("/admin"))
      ) {
        navigate.push("/dashboard/student");
      } else if (
        userType === userCategory.teacher &&
        (pathname.includes("/student") || pathname.includes("/admin"))
      ) {
        navigate.push("/dashboard/teacher");
      } else if (
        userType === userCategory.admin &&
        (pathname.includes("/teacher") || pathname.includes("/student"))
      ) {
        navigate.push("/dashboard/admin");
      }
    }
    return <Component {...props} />;
  };
}
