"use client";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";

const inputField = [
  { name: "Full Name", type: "text", placeholder: "Enter Full name" },
  { name: "Email", type: "text", placeholder: "Enter Email " },
  { name: "Password", type: "password", placeholder: "Enter Password" },
  {
    name: "Confirm Password",
    type: "password",
    placeholder: "Re-enter Password",
  },
];
const Data = (item, index) => {
  return (
    <div key={index} className=" max-lg:mb-1">
      <div className="mb-2 max-md:mb-1 max-lg:mb-2 ">
        <label className=" ml-7  max-sm:text-xs max-md:text-xs max-lg:text-sm text-primaryColor-950">
          {item.name}
        </label>
      </div>
      <div className="flex mb-4 max-md:mb-2">
        <Input
          required
          type={item.type}
          className="w-full ml-5  max-sm:text-xs max-md:text-xs max-lg:text-sm relative focus:border-primaryColor-700 focus:text-primaryColor-950 transition duration-200 input-type "
        />
        <label className="absolute mt-2 p-1 ml-7 max-sm:mt-1 max-md:text-xs max-lg:text-sm max-sm:text-xs  max-sm:ml-7    text-primaryColor-400 text-sm transition duration-200 input-text">
          {item.placeholder}
        </label>
      </div>
    </div>
  );
};

const handleSubmit = () => {
  console.log("hi");
  alert("hello");
};

export default function Signupform() {
  return (
    <>
      <div className="h-screen w-screen bg-primaryColor-100  max-sm:h-screen max-sm:w-screen flex justify-around ">
        <div className=" flex w-1/2 bg-gradient-to-tl from-primaryColor-500 to-primaryColor-900 max-sm:hidden  ">
          <div className="relative w-full h-full">
            <Image
              className="bg"
              src="/images/bw.jpg"
              alt="qr code"
              layout="fill"
            />
          </div>
        </div>
        <div className="w-1/2 max-sm:w-full  ">
          <form onSubmit={handleSubmit}>
            <div className="h-5 w-full mb-3 text-center align-middle py-1">
              <label className="text-center font-bold text-primaryColor-900 font-mono  max-lg:text-xl text-2xl">
                SignUp
              </label>
            </div>
            <div className="h-auto w-auto  text-primaryColor-950 rounded-lg px-5 max-sm:w-full max-sm:h-full max-md:h-full ">
              {inputField.map(Data)}

              <div className="flex flex-col max-lg:text-sm  max-sm:text-xs  mb-2">
                <div className=" p-2 ml-7  max-md:text-xs ">
                  <label>Role</label>
                </div>

                <div className=" px-2 ml-7  max-md:text-xs">
                  <RadioGroup defaultValue="male">
                    <div className="flex items-center space-x-2  text-primaryColor-950 max-md:text-xs max-lg:text-sm">
                      <RadioGroupItem value="Teacher" />
                      Teacher
                    </div>
                    <div className="flex items-center space-x-2   text-primaryColor-950 max-md:text-xs max-lg:text-sm">
                      <RadioGroupItem value="Student" />
                      Student
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="flex justify-center text-sm mb-2 max-lg:text-xs max-lg:mt-1">
                <label>
                  Already have an account?
                  <Link href="/login" className="underline font-semibold">
                    Login
                  </Link>
                </label>
              </div>

              <div className="flex justify-center  ">
                <Button
                  className=" text-primaryColor-200 align-middle  font-medium tracking-wider uppercase text-lg max-lg:text-base py-2  md:mx-10 w-[80%] md:w-[70%]  xl:w-[50%] mt-5 lg:mt-0  xl:ml-10   "
                  buttonText="Sign Up"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
