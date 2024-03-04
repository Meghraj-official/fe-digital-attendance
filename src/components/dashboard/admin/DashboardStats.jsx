"use client"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import axiosInstance from "@/lib/axios";

import { BookCopyIcon,BookOpenIcon, GraduationCap, User2Icon} from "lucide-react";
import { useQuery } from "react-query";




export default function DashboardStats() {
  const getDashboardData = async() => {
    const res =await axiosInstance.get("/admin/dashboard");

    return res?.data;
  };

  const { data:datas } = useQuery(
    "dashboardData",
    getDashboardData
  );
  const data=[
    {
      title:" Students",
      count:datas?.students?.toString()|| "XX",
      description:" Total count of the student in the system",
      icon:<GraduationCap/>
    },
    {
      title:" Teachers",
      count:datas?.teachers?.toString()|| "XX",
      description:" Total count of the teacher in the system",
      icon:<User2Icon/>,
     
    },
    {
      title:" Course",
      count:datas?.courses?.toString()|| "XX",
      description:" Total count of the course in the system",
      icon:<BookCopyIcon/>
    },
    {
      title:" Subject",
      count:datas?.subjects?.toString()|| "XX",
      description:"Total count of the subject in the system",
      icon:<BookOpenIcon/>
    },
    {
      title:" Pending students",
      count:datas?.pendingStudents?.toString()|| "XX",
      description:"Total count of the pending students in the system",
      icon:<User2Icon/>
    },
    {
      title:"Pending Teachers ",
      count:datas?.pendingTeachers?.toString()|| "XX",
      description:"Total count of the pending teachers in the system",
      icon:<User2Icon/>
    }
  ]
 
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-5 lg:h-[80vh] py-2 px-1  lg:px-3 ">
      {data.map((item,index)=>{
        return(
          <div key={index} className="min-w-fit">
          <Card >
            
          <CardHeader className="flex flex-row items-center justify-between h-[20%]  pb-2 space-y-0">
            <CardTitle className="text-xs  lg:text-base font-semibold">
            {item.title}
            </CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent className=" flex flex-col justify-center h-[80%] ">
            <div className="text-lg lg:text-5xl font-bold">{item.count}</div>
            <p className="text-xs lg:text-sm  dark:text-gray-400">
              {item.description}
            </p>
          </CardContent>
        </Card>
        </div>

        )
      })}
        
      </div>
    
  );
}

// 