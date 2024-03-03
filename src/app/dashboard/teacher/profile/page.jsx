import DialogBox from "@/components/common/DialogBox";
import { TableDemo } from "@/components/dashboard/teacher/TableDemo";
import React from "react";

const TeacherProfile = () => {
  return (
    <div className="flex flex-col gap-2  items-center  px-5  ">
      <div className="self-center ">
        <DialogBox />
      </div>
      <div className="h-80  w-[95%] overflow-y-scroll  bg-primaryColor-100">
        <TableDemo />
      </div>
    </div>
  );
};

export default TeacherProfile;