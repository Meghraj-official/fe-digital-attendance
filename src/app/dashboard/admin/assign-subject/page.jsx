"use client";
import TableComponent from "@/components/Table";
import AssignSubjectModal from "@/components/dashboard/admin/AssignSubjectModal";
import { DialogContent } from "@/components/ui/dialog";
import axiosInstance from "@/lib/axios";
import { Dialog, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import { useQuery } from "react-query";

const AssignSubject = () => {
  const { data: verifiedTeachers, isLoading } = useQuery(
    "verified-teachers",
    async () => {
      return (await axiosInstance.get("/user/verified-teachers")).data;
    }
  );
  console.log('My  teachers', verifiedTeachers);
  const tableHeader = [{ label: "Verified Teachers", accessorKey: "fullName" }];


  const actions = (rowData) => { 
    return ( 
      <div className="flex flex-row gap-2 mt-2 ">
      <Dialog>
        <DialogTrigger>
          <button className="bg-primaryColor-300 p-2 rounded-md">
            Assign Subject
          </button>
        </DialogTrigger>
        <DialogContent className="bg-white ">
       <AssignSubjectModal teacherId={rowData?._id} assignedSubjects={rowData?.assignedSubjects} />
        </DialogContent>
      </Dialog>
    </div>
    )
  }


  return (
    <div className="px-3 ">
      <h1 className="font-medium text-start text-xl text-primaryColor-900 p-3">Assign Subjects</h1>
      
            <TableComponent
              isLoading={isLoading}
              tableBody={verifiedTeachers?.teachers}
              tableHeader={tableHeader}
              actions={actions}
            />
        
        
    </div>
  );
};

export default AssignSubject;
