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
    <div className="lg:h-[80vh] w-full md:px-5 px-2  flex flex-col ">
      <h2 className=" text-xl text-left my-6 text-primaryColor-950 font-semibold tracking-wide  ">
        {" "}
        {greet},{" "}
        <span className="font-2xl text-2xl text-primaryColor-700 ">
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
                <li className="flex gap-2 items-center " key={subject}>
                  <span> {i + 1}.</span> <p>{subject}</p>
                </li>
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
            <li className="flex justify-around gap-2 items-center lg:text-sm text-sm  ">
              <span className="font-semibold  ">Name : </span>{" "}
              <div className="border border-primaryColor-800 bg-primaryColor-50 w-[70%] rounded-md p-2">
                {" "}
                <p> {teacherData?.fullName}</p>
              </div>
            </li>
            <li className="flex justify-around gap-2 items-center lg:text-sm text-sm">
              <span className="font-semibold">Role : </span>{" "}
              <div className="border border-primaryColor-800 bg-primaryColor-50 w-[70%] rounded-md p-2">
                <p> {teacherData?.role}</p>
              </div>
            </li>
            <li className="flex justify-around gap-2 flex-wrap items-center lg:text-sm text-sm ">
              <span className="font-semibold">Mail : </span>{" "}
              <div className="border border-primaryColor-800 bg-primaryColor-50 w-[70%] rounded-md p-2">
                <p className="flex-wrap"> {teacherData?.email}</p>
              </div>
            </li>
            <li className="flex justify-around gap-2 items-center lg:text-sm text-sm">
              <span className="font-semibold">Status : </span>{" "}
              <div className=" border border-primaryColor-800 bg-primaryColor-50 w-[70%] rounded-md p-2">
                <p> {teacherData?.status}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomeInfo;
