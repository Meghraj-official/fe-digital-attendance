"use client";
import { redirect } from "next/navigation";
import { useAuthStore } from "@/store/authStore";

const Dashboard = () => {
  const { userType } = useAuthStore();

  redirect(`/dashboard/${userType.toLowerCase()}`);
};

export default Dashboard;
