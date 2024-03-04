"use client";
import TableComponent from "@/components/Table";
import AddCourse from "@/components/common/AddCourse";
import axiosInstance from "@/lib/axios";
import { useCourseStore } from "@/store/courseStore";
import React from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";

const Course = () => {
  const { data, isLoading , refetch : refetchCourse } = useQuery("courses", async () => {
    return useCourseStore.getState().getCourses()
  });


  const tableHeader = [
    { label: "Course Name", accessorKey: "name" },
    { label: "Course Id", accessorKey: "code" },
    {
      label: "Course Type",
      accessorKey: "courseType",
    },
  ];
  const handleDeleteCourse = async (id) => {
    return await axiosInstance.delete(`/course/delete/${id}`);
  };  
  const { mutate: deleteCourse , isLoading: isDeleting } = useMutation(handleDeleteCourse, {
    onSuccess: () => {
      toast.success("Course Deleted Sucessfully");
    refetchCourse();
 
    },
    onError: (error) => {
      toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
    },
  });

  const actions =(rowData) =>  (
    <div className="flex flex-row gap-2 mt-2">
      <button className="bg-primaryColor-300 p-2 disabled:opacity-60 disabled:cursor-not-allowed rounded-md"  disabled={isDeleting} onClick={() => { deleteCourse(rowData?._id) }}>Delete</button>
    </div>
  );

  return (
    <>
      <div className="flex flex-col justify-center gap-4 px-3">
        <button className="bg-primaryColor-300  place-self-end  rounded-md">
          <AddCourse refetch={refetchCourse} />
        </button>
        {/* <div className="bg-primaryColor-100 overflow-y-auto h-80 w-[100%] "> */}
        {/* <CourseTable /> */}
        <TableComponent
          isLoading={isLoading}
          tableBody={data?.courses}
          tableHeader={tableHeader}
          actions={actions}
        />
        {/* </div> */}
      </div>
    </>
  );
};
export default Course;
