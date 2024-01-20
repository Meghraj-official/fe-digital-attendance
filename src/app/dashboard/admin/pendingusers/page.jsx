"use client";
import { PendingTeacher } from "@/components/dashboard/admin/PendingTeacher";
import { PendingStudent } from "@/components/dashboard/admin/PendingStudent";
import React, { useState } from "react";

const tab = ["teacher", "student"];
const PendingUser = () => {
  const [activeTab, setActiveTab] = useState("teacher");

  return (
    <div className="w-full h-full flex flex-col justify-center">
      <div className="flex flex-row justify-start ml-10 gap-4 ">
        {tab.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={` p-2 capitalize rounded-md focus:bg-primaryColor-500 ${
              activeTab === item
                ? "bg-primaryColor-500 text-primaryColor-50"
                : "bg-primaryColor-300"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="h-[70vh] w-[95%] mt-10 ml-10 overflow-y-auto  bg-primaryColor-100">
        {activeTab === "teacher" && <PendingTeacher />}
        {activeTab === "student" && <PendingStudent />}
      </div>
    </div>
  );
};
export default PendingUser;
