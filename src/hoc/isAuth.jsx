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
        return redirect("/");
      }
    }, [auth]);

    if (pathname.startsWith("/dashboard") && !auth) {
      navigate.push("/login");
    }

    if (
      (pathname.startsWith("/login") || pathname.startsWith("/signup")) &&
      auth
    ) {
      navigate.push("/dashboard");
    }

    if (!auth) {
      return null;
    }

    if (auth) {
      if (userType === userCategory.student) {
        navigate.push("/dashboard/student");
      } else if (userType === userCategory.teacher) {
        navigate.push("/dashboard/teacher");
      } else if (userType === userCategory.admin) {
        navigate.push("/dashboard/admin");
      }
    }
    return <Component {...props} />;
  };
}
