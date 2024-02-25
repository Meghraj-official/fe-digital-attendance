import React from "react";

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
    <div className="lg:h-[80vh] w-full px-5 flex flex-col ">
      <h2 className=" text-xl text-left my-6 text-primaryColor-950 font-semibold tracking-wide  ">
        {" "}
        {greet},{" "}
        <span className="font-2xl text-2xl text-primaryColor-700 ">
          {teacherData?.fullName}
        </span>{" "}
      </h2>
      <div className="flex flex-col md:flex-row h-fit w-full  gap-5 lg:gap-20 ">
        <div className="flex flex-col  max-w-[300px] border bg-primaryColor-100 p-5 rounded-md">
          <h1 className="text-2xl text-left font-bold mb-5">
            Assigned Subjects.
          </h1>
          <ul className="text-left space-y-1">
            {assignedSubjects?.map((subject, i) => {
              return (
                <li className="flex gap-2 items-center " key={subject}>
                  <span> {i + 1}.</span> <p>{subject}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col  max-w-[300px] border bg-primaryColor-100 p-5 rounded-md">
          <h1 className="text-2xl font-bold mb-5 text-left">
            {" "}
            Personal Details
          </h1>
          <ul className="text-left flex flex-col space-y-1">
            <li className="flex gap-2 items-center ">
              <span className="font-semibold">Name : </span>{" "}
              <p> {teacherData?.fullName}</p>
            </li>
            <li className="flex gap-2 items-center ">
              <span className="font-semibold">Role : </span>{" "}
              <p> {teacherData?.role}</p>
            </li>
            <li className="flex gap-2 flex-wrap items-center ">
              <span className="font-semibold">Mail : </span>{" "}
              <p className="flex-wrap"> {teacherData?.email}</p>
            </li>
            <li className="flex gap-2 items-center ">
              <span className="font-semibold">Status : </span>{" "}
              <p> {teacherData?.status}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
