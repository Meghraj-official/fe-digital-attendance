"use client";
import { Input } from "@/components/ui/input";

// const clickHandler=()=>{
//     console.log('hi')
// }

const Array = ["FullName", "Email", "Password", "Confirm Password"];
const Data = (_,index) => {
  return (
    <div key={index} className="flex justify-between mb-3">
      <label></label>
      {index}
      <Input className="w-72 ml-10 max-sm:w-40" />
    </div>
  );
};

const clickHandler = () => {
  console.log("hi");
  alert("hello");
};

// bg-cyan-500

export default function Login() {
  return (
    <>
      <div className="h-screen w-screen bg-cyan-500 max-sm:h-screen max-sm:w-screen ">
        <div className="h-20">
          {" "}
          <h1 className="text-center w-screen  font-medium text-4xl">
            Digital Attendance
          </h1>{" "}
        </div>
        <div className="flex justify-center  p-5 rounded-lg ">
          <div className="h-auto w-auto bg-cyan-200 rounded-lg p-5 max-sm:w-80">
            {Array.map(Data)}

            <div className="flex justify-center mt-10 mb-5">
              <button
                type="button"
                onClick={clickHandler}
                className="bg-cyan-500 rounded-xl h-10 w-20 "
              >
                clickme
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
