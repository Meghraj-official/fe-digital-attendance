import { useAttendanceListStore } from "@/store/attendanceListStore";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent() {
  const { date, setDate } = useAttendanceListStore((state) => state);
  return (
    <div className="App">
      <DatePicker
        className="border py-1.5 border-black rounded-md p-1"
        selected={date}
        onChange={(date) => {
          console.log(date);
          setDate({ date });
        }}
        placeholderText={"dd/mm/yyyy"}
        filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}

export default DatePickerComponent;
