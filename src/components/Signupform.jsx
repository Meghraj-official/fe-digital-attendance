"use client";
import { Input } from "@/components/ui/input";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";



const inputField = [
  { name: "FullName", type: "text" },
  { name: "Email", type: "text" },
  { name: "Password", type: "password" },
  { name: "Confirm Password", type: "password" },
];
const Data = (item, index) => {
  return (
    <div key={index} className="flex justify-between ">
      <label className="mb-2">{item.name}</label>
      <Input type={item.type} className="w-72 ml-10 max-sm:w-40 mb-2" />
    </div>
  );
};

const handleSubmit = () => {
  console.log("hi");
  alert("hello");
};

// bg-cyan-500

export default function Signupform() {
  return (
    <>
      <div className="h-screen w-screen bg-cyan-500 max-sm:h-screen max-sm:w-screen ">
        <div className="">
          {" "}
          <h1 className="text-center w-screen  font-medium text-4xl">
            Digital Attendance
          </h1>{" "}
        </div>
        <form onSubmit={handleSubmit}>
        <div className="flex justify-center  p-5 rounded-lg ">
          <div className="h-auto w-auto bg-cyan-200 rounded-lg p-5 max-sm:w-80">
            {inputField.map(Data)}

            <div className="flex justify-between">
              <label>Role</label>

              <RadioGroup defaultValue="male">
                <div className="flex items-center space-x-2 mr-52 max-sm:ml-24 ">
                  <RadioGroupItem value="Teacher" />
                  Teacher
                </div>
                <div className="flex items-center space-x-2 mr-52 max-sm:ml-24">
                  <RadioGroupItem value="Student" />
                  Student
                </div>
              </RadioGroup>
            </div>
            
            <div className="flex justify-center mt-5 mb-5">
              <button
                type="submit"
                className="bg-cyan-500 rounded-xl h-10 w-20 "
              >
                Sign up
              </button>
             
            </div>
            
          </div>
        </div>
        </form>
      </div>
    </>
  );
}
