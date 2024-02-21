"use client";
import TableComponent from "@/components/Table";
import AddSubject from "@/components/common/AddSubject";
import axiosInstance from "@/lib/axios";
import { dialogClose } from "@/lib/utils";
import React from "react";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "react-query";

const Subject = () => {
  const {
    data,
    isLoading,
    refetch: refetchSubjects,
  } = useQuery("subjects", async () => {
    return (await axiosInstance.get("/subject/list")).data;
  });

  const tableHeader = [
    {
      label: "Subject Name",
      accessorKey: "name",
    },
    {
      label: "Subject Code",
      accessorKey: "code",
    },
  ];

  const handleDeleteSubject = async (id) => {
    return await axiosInstance.delete(`/subject/delete/${id}`);
  };

  const { mutate: deleteSubject } = useMutation(handleDeleteSubject, {
    onSuccess: () => {
      toast.success("Subject Deleted Sucessfully");
      refetchSubjects();
      dialogClose();
    },
    onError: (error) => {
      toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
      dialogClose();
    },
  });

  const actions = (rowData) => (
    <div className="flex flex-row gap-2 mt-2">
      {console.log(rowData)}
      <button
        className="bg-primaryColor-300 p-2 rounded-md"
        onClick={() => {
          deleteSubject(rowData?._id);
        }}
      >
        Delete
      </button>
    </div>
  );

  return (
    <>
      <div className="flex flex-col   justify-center px-3 gap-4 ">
        <button className="bg-primaryColor-300  place-self-end mr-10 rounded-md">
          <AddSubject refetch={refetchSubjects} />
        </button>
        {/* <TableSkeleton /> */}

        <div className="bg-white  h-80 w-[100%] ">
          {/* <SubjectTable /> */}
          <TableComponent
            isLoading={isLoading}
            tableHeader={tableHeader}
            tableBody={data?.subjects}
            actions={actions}
          />
        </div>
      </div>
    </>
  );
};
export default Subject;
