import React from "react";
import { Badge } from "@/components/ui/badge";

const HomeInfo = ({ teacherData }) => {
  const assignedSubjects = teacherData?.assignedSubjects?.flatMap(
    (item) => item?.name
  );

  var myDate = new Date();
  var hrs = myDate.getHours();
  console.log(teacherData);

  var greet;

  if (hrs >= 4 && hrs < 12) greet = "Good Morning";
  else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
  else if (hrs >= 17 && hrs < 20) greet = "Good Evening";
  else if ((hrs > 20 && hrs <= 24) || (hrs >= 0 && hrs < 4))
    greet = "Good Night";

  return (
    <div className="lg:h-[80vh] w-full md:px-5 px-2  flex flex-col ">
      <h2 className=" text-xl text-left my-6 text-primaryColor-950 font-semibold tracking-wide  ">
        {" "}
        {greet},{" "}
        <span className="font-2xl text-2xl text-primaryColor-700 capitalize ">
          {teacherData?.fullName}
        </span>{" "}
      </h2>
      <div className="flex flex-col md:flex-row h-fit w-full justify-around  gap-5 lg:gap-10 ">
        <div className="flex flex-col lg:w-[50%] w-full border bg-primaryColor-100 p-5 rounded-md">
          <h1 className="lg:text-2xl text-xl text-center font-bold mb-5">
            Assigned Subjects.
          </h1>
          <ul className="text-left space-y-1">
            {assignedSubjects?.map((subject, i) => {
              return (
                <>
                  <li
                    className={`${
                      assignedSubjects?.length - 1 === i
                        ? "border-none"
                        : "border-b"
                    } border-primaryColor-300 flex gap-2 items-center lg:text-sm text-sm text-primaryColor-950 py-2.5`}
                    key={subject}
                  >
                    <span> {i + 1}.</span>{" "}
                    <p className=" text-center  ">{subject}</p>
                  </li>
                  {/* <hr className="w-full border-y-1 border-primaryColor-300" /> */}
                </>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col justify-between w-full lg:w-[50%] h-80 border bg-primaryColor-100 p-5 rounded-md">
          <h1 className="lg:text-2xl text-xl font-bold  text-center">
            {" "}
            Personal Details
          </h1>
          <ul className="text-left flex flex-col gap-5">
            {/* <hr className="w-full border-y-1 border-primaryColor-300" /> */}

            <li className="flex justify-between gap-1 items-center lg:text-sm text-sm  ">
              <span className="font-semibold  ">Name </span>{" "}
              <p> {teacherData?.fullName}</p>
            </li>
            <hr className="w-full border-y-1 border-primaryColor-300" />

            <li className="flex justify-between gap-2 items-center lg:text-sm text-sm">
              <span className="font-semibold">Role </span>{" "}
              <p> {teacherData?.role}</p>
            </li>
            <hr className="w-full border-y-1 border-primaryColor-300" />

            <li className="flex justify-between gap-2 flex-wrap items-center lg:text-sm text-sm ">
              <span className="font-semibold">Email </span>{" "}
              <p className="flex-wrap"> {teacherData?.email}</p>
            </li>
            <hr className="w-full border-y-1 border-primaryColor-300" />

            <li className="flex justify-between gap-2 items-center lg:text-sm text-sm">
              <span className="font-semibold">Status </span>{" "}
              <Badge className="bg-green-200  text-green-700">
                <p> {teacherData?.status}</p>
              </Badge>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
