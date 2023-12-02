"use client";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Button from "./Button";
import Image from "next/image";

// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const loginField = [
  { name: "Email", type: "text", placeholder: "Enter Email" },
  { name: "Password", type: "password", placeholder: "Enter Password" },
];
const LoginData = (user, index) => {
  return (
    <div key={index} className=" mb-3 max-lg:mb-1 ">
      <div className="mb-3 max-md:mb-1 max-lg:mb-2">
        <label className=" ml-7 max-sm:text-xs max-md:text-xs max-lg:text-sm text-primaryColor-950 ">
          {user.name}
        </label>
      </div>
      <div className="flex mb-4  max-md-md:md-2">
        <Input
          required
          type={user.type}
          className="  w-full ml-5  max-sm:text-xs max-md:text-xs max-lg:text-sm    focus:border-primaryColor-700 focus:text-primaryColor-950 transition duration-200 input-type "
        />
        <label className="absolute mt-2 ml-7 max-sm:mt-1 max-md:text-xs max-lg:text-sm max-sm:text-xs  max-sm:ml-7 text-primaryColor-400 text-sm transition duration-200 input-text p-1 ">
          {user.placeholder}
        </label>
      </div>
    </div>
  );
};

const handleSubmit = () => {
  console.log("hello sandhya");
  alert("hi sandhya");
};

export default function Loginform() {
  return (
    <>
      <div className="h-screen w-screen  bg-primaryColor-100  max-sm:h-screen max-sm:w-screen flex flex-row max-sm:flex-col ">
        <div className="flex justify-center   max-w-sm:flex-row w-1/2 bg-gradient-to-tl from-primaryColor-500 to-primaryColor-900 max-sm:w-full max-sm:h-1/2 ">
          <div className=" text-primaryColor-100   self-center">
            <div className="flex justify-center ">
              <label className="  font-bold font-mono text-3xl p-2 max-sm:text-2xl">
                New Here?
              </label>
            </div>
            <div className="flex justify-center">
              <label className="font-bold font-mono text-lg text-center p-2 max-sm:text-xl ">
                Revolutionize Attendance with Speed!
              </label>
            </div>
            <div className="flex justify-center mt-10 max-sm:mt-1">
              <button className=" text-primaryColor-950  max-sm:text-sm  bg-primaryColor-100 rounded-3xl  font-medium tracking-wider uppercase text-lg py-2 mx-auto md:mx-10 w-[80%] md:w-[70%]  xl:w-[50%] mt-8 lg:mt-0  xl:ml-10 ">
                <Link href="/signup">
                  <label>Sign Up</label>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className="w-1/2  max-sm:w-full max-sm:h-1/2 ">
          <form onSubmit={handleSubmit}>
            <div className="h-5 w-full mb-3 text-center align-middle py-1">
              <label className="text-center font-bold text-primaryColor-900 font-mono  max-lg:text-xl text-2xl">
                LogIn
              </label>
            </div>
            <div className="w-full text-primaryColor-950 rounded-lg p-5 mt-32 max-sm:mt-0 max-sm:w-full max-md:h-full  ">
              {loginField.map(LoginData)}

              <div className="flex justify-center  mt-5 max-sm:mt-1    ">
                <Button
                  className=" text-primaryColor-200 font-medium max-sm:text-sm max-sm:py-1 max-sm:my-5 tracking-wider uppercase text-lg py-2 mx-auto max-lg:text-base md:mx-10 w-[80%] md:w-[70%]  xl:w-[50%] mt-8 lg:mt-0  xl:ml-10 "
                  buttonText="Login"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
