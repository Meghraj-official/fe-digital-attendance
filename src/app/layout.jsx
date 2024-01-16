"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "@/components/ui/toaster";

const queryClient = new QueryClient();

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
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
