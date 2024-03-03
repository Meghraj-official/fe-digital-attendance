"use client"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

import { BookCopyIcon,BookOpenIcon, GraduationCap, User2Icon} from "lucide-react";
const data=[
  {
    title:" Students",
    count:"500",
    description:" Total count of the student in the system",
    icon:<GraduationCap/>
  },
  {
    title:" Teachers",
    count:"30",
    description:" Total count of the teacher in the system",
    icon:<User2Icon/>
  },
  {
    title:" Course",
    count:"500",
    description:" Total count of the course in the system",
    icon:<BookCopyIcon/>
  },
  {
    title:" Subject",
    count:"500",
    description:"Total count of the subject in the system",
    icon:<BookOpenIcon/>
  }
]



export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-10 lg:h-[80vh] py-2 px-1 lg:px-3 ">
      {data.map((item,index)=>{
        return(
          <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between h-[20%] pb-2 space-y-0">
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

        )
      })}
        {/* <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Students
            </CardTitle>
            <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">500</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +15% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Total Teachers
            </CardTitle>
            <SchoolIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">30</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +10% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-sm font-medium">
              Verified Users
            </CardTitle>
            <CheckIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">200</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              +25% from last month
            </p>
          </CardContent>
        </Card> */}
      </div>
    
  );
}

// 