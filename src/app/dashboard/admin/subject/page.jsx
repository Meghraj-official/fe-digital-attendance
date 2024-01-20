import { SubjectTable } from "@/components/dashboard/admin/SubjectTable";
import React from "react";

const Subject = () => {
  return (
    <>
      <div className="flex flex-col w-[95%]  justify-center ml-10 gap-4 ">
        <button className="bg-primaryColor-300 p-2 place-self-end mr-10 rounded-md">
          Add Subject
        </button>
        <div className="bg-primaryColor-100 overflow-y-auto h-80 w-[100%] ">
          <SubjectTable />
        </div>
      </div>
    </>
  );
};
export default Subject;
