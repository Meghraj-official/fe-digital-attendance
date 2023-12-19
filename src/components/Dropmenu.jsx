import React from "react";
import { Settings } from "lucide-react";
import { LogOut } from "lucide-react";
import { User } from "lucide-react";

const Dropmenu = () => {
  return (
    <>
      <div className=" flex justify-around flex-col w-40 h-40 bg-primaryColor-300 rounded-lg ">
        <div className="flex justify-around p-3 hover:bg-primaryColor-200">
          <User className="" /> <label> Profile</label>
        </div>
        <div className="flex justify-around p-3 hover:bg-primaryColor-200">
          <Settings className="" /> <label> Setting</label>
        </div>
        <div className="flex justify-around p-3 hover:bg-primaryColor-200">
          <LogOut className="" /> <label> Logout</label>
        </div>
      </div>
    </>
  );
};
export default Dropmenu;
