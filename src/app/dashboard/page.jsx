"use client";
import { useAuthStore } from "@/store/authStore";

const Dashboard = () => {
  const { userType } = useAuthStore();
  console.log("user type", userType);
  return (
    <div className="flex  gap-2 items-center flex-wrap p-8 justify-evenly ">
      <div className="w-40 h-40 bg-primaryColor-100"></div>
      <div className="w-40 h-40 bg-primaryColor-100"></div>
      <div className="w-40 h-40 bg-primaryColor-100"></div>
      <div className="w-40 h-40 bg-primaryColor-100"></div>
    </div>
  );
};

export default Dashboard;
