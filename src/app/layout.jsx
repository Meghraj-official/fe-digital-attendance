"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
// import { usePathname, useRouter } from "next/navigation";
// import { useAuthStore } from "@/store/authStore";
// import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const pathname = usePathname();
  // const { isAuth, setAuth, token } = useAuthStore();

  // const navigate = useRouter();

  // useEffect(() => {
  //   if (token) {
  //     setAuth({
  //       isAuth: true,
  //       token: token,
  //     });
  //   }
  // }, [setAuth, token]);

  // if (pathname.startsWith("/dashboard") && !isAuth) {
  //   navigate.push("/login");
  // }

  // if (
  //   (pathname.startsWith("/login") || pathname.startsWith("/signup")) &&
  //   isAuth
  // ) {
  //   navigate.push("/dashboard");
  // }

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <Toaster />
          {children}
        </body>
      </html>
    </QueryClientProvider>
  );
}
