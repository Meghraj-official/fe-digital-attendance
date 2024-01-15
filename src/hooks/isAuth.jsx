"use client";
import { useLayoutEffect } from "react";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

export default function isAuth(Component) {
  return function IsAuth(props) {
    const { isAuth: isAuthenticated } = useAuthStore();
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

    return <Component {...props} />;
  };
}
