"use client";
// import { useLayoutEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";
import { userCategory } from "@/lib/data/user";

export default function isAuth(Component) {
  return function IsAuth(props) {
    const { isAuth: isAuthenticated, userType } = useAuthStore();
    const pathname = usePathname();
    const auth = isAuthenticated;
    const navigate = useRouter();

    const publicPaths = ["/", "/signup", "/login"];
    const isPublicRoute = publicPaths.some((path) => path === pathname);
    if (auth) {
      if (
        userType === userCategory.student &&
        (pathname.includes("/teacher") ||
          pathname.includes("/admin") ||
          isPublicRoute)
      ) {
        navigate.push("/dashboard/student");
      } else if (
        userType === userCategory.teacher &&
        (pathname.includes("/student") ||
          pathname.includes("/admin") ||
          isPublicRoute)
      ) {
        navigate.push("/dashboard/teacher");
      } else if (
        userType === userCategory.admin &&
        (pathname.includes("/teacher") ||
          pathname.includes("/student") ||
          isPublicRoute)
      ) {
        navigate.push("/dashboard/admin");
      }
    }

    return <Component {...props} />;
  };
}
