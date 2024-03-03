import React from "react";
import DatePickerComponent from "./DatePicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAttendanceListStore } from "@/store/attendanceListStore";
import { FormatAssignSubjects } from "@/lib/helpers/FormatAssignSubjects";
import axiosInstance from "@/lib/axios";
import { useQuery } from "react-query";

const AttendanceListTools = () => {
  const { data: teacherData } = useQuery("currentTeacher", async () => {
    return (await axiosInstance.get("/user/showme")).data;
  });

  const { setState } = useAttendanceListStore;

  const { CurrentSubject } = useAttendanceListStore((state) => state);

  return (
    <div className="flex flex-col gap-5 md:gap-10">
      <h1 className="text-2xl md:text-3xl text-primaryColor-900 text-center  font-bold">
        Attendance List
      </h1>
      <div className="flex gap-5 flex-wrap w-full  md:justify-end ">
        <div className=" rounded-md min-w-[225px] max-w-fit ">
          <Select
            onValueChange={(value) => setState({ subjectCode: value })}
            defaultValue={CurrentSubject}
            className="bg-primaryColor-50 h-full outline-none border border-primaryColor-800 rounded-md text-center text-sm lg:text-sm  "
          >
            <SelectTrigger>
              <SelectValue placeholder="Select subject" />
            </SelectTrigger>
            <SelectContent className="bg-primaryColor-50 ">
              {FormatAssignSubjects(teacherData?.assignedSubjects)?.map(
                (option) => (
                  <SelectItem value={option?.value} key={option.value}>
                    {option?.label}
                  </SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </div>
        <DatePickerComponent />
      </div>
    </div>
  );
};

export default AttendanceListTools;
