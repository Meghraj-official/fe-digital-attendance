import { CourseTable } from "@/components/dashboard/admin/CourseTable";
import React from "react";

const Course = () => {
  return (
    <>
      <div className="flex  flex-col w-[95%] justify-center ml-10 gap-4 ">
        <button className="bg-primaryColor-300 p-2 place-self-end mr-10 rounded-md">
          Add Course
        </button>
        <div className="bg-primaryColor-100 overflow-y-auto h-80 w-[100%] ">
          <CourseTable />
        </div>
      </div>
    </>
  );
};
export default Course;
