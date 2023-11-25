"use client";
import { Input } from "@/components/ui/input";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";

// const clickHandler=()=>{
//     console.log('hi')
// }

const Array = [
  { name: "FullName", type: "text" },
  { name: "Email", type: "text" },
  { name: "Password", type: "password" },
  { name: "Confirm Password", type: "password" },
];
const Data = (item, index) => {
  return (
    <div key={index} className="flex justify-between mb-3">
      <label>{item.name}</label>
      <Input type={item.type} className="w-72 ml-10 max-sm:w-40" />
    </div>
  );
};

const clickHandler = () => {
  console.log("hi");
  alert("hello");
};

// bg-cyan-500

export default function Signupform() {
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

            <div className="flex justify-between">
              <label>Role</label>

              <RadioGroup defaultValue="male">
                <div className="flex items-center space-x-2 mr-52  ">
                  <RadioGroupItem value="Teacher" />
                  Teacher
                </div>
                <div className="flex items-center space-x-2 mr-52 ">
                  <RadioGroupItem value="Student" />
                  Student
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex justify-center mt-10 mb-5">
              <button
                type="button"
                onClick={clickHandler}
                className="bg-cyan-500 rounded-xl h-10 w-20 "
              >
                Sign up
              </button>
             
            </div>
            <div className="flex justify-center">
            <label className="h-10 text-sm text-center">Already have an account?<Link href='/login' className="underline">Login</Link></label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
