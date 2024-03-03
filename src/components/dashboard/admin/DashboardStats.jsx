"use client"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

import { BookCopyIcon,BookOpenIcon, GraduationCap, User2Icon} from "lucide-react";
const data=[
  {
    title:"Total Students",
    count:"500",
    description:" +15% from last month",
    icon:<GraduationCap/>
  },
  {
    title:"Total Teachers",
    count:"30",
    description:" +10% from last month",
    icon:<User2Icon/>
  },
  {
    title:"Total Course",
    count:"500",
    description:" +15% from last month",
    icon:<BookCopyIcon/>
  },
  {
    title:"Total Subject",
    count:"500",
    description:" +25% from last month",
    icon:<BookOpenIcon/>
  }
]



export default function DashboardStats() {
  return (
    <div className="grid grid-cols-2 gap-10 lg:h-[80vh] px-3 ">
      {data.map((item,index)=>{
        return(
          <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between h-[20%] pb-2 space-y-0">
            <CardTitle className="text-base font-semibold">
            {item.title}
            </CardTitle>
            {item.icon}
          </CardHeader>
          <CardContent className=" flex flex-col justify-center h-[80%] ">
            <div className="text-5xl font-bold">{item.count}</div>
            <p className="text-sm  dark:text-gray-400">
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