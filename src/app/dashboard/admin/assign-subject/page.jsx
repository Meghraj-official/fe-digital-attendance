"use client"
import TableComponent from '@/components/Table';
import axiosInstance from '@/lib/axios';
import React from 'react'
import { useQuery } from 'react-query';


const AssignSubject = () => {
    const { data: verifiedTeachers, isLoading } = useQuery("verified-teachers", async () => {
        return (await axiosInstance.get("/user/pending-teachers")).data
      });
      console.log('verfifrd ,', verifiedTeachers?.teachers)

      const tableHeader = [
        { label: "Verified Teachers", accessorKey: "fullName" },
  
      ];
      const actions = (
        <div className="flex flex-row gap-2 mt-2">
          <button className="bg-primaryColor-300 p-2 rounded-md">Assign Subject</button>
        </div>
      );
  return (
    <div>

        { verifiedTeachers &&   verifiedTeachers?.teachers?.map((teacher) => { 

            return( 
                <TableComponent key={teacher?._id}
                isLoading={isLoading}
                tableBody={verifiedTeachers?.teachers}
                tableHeader={tableHeader}
                actions={actions}
              />
            )

        }) } 
    </div>
  )
}

export default AssignSubject