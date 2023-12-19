"use client";
import Link from "next/link";
import Button from "../Button";
import LoginData from "./LoginData";

const loginField = [
  { name: "Email", type: "text", placeholder: "Enter Email" },
  { name: "Password", type: "password", placeholder: "Enter Password" },
];

const handleSubmit = () => {
  console.log("hello sandhya");
  alert("helloooooo");
};

export default function Loginform() {
  return (
    <>
      <div className="h-screen w-screen  bg-primaryColor-100  max-sm:h-screen max-sm:w-screen flex flex-row max-sm:flex-col ">
        <div className="flex justify-center   max-w-sm:flex-row w-1/3 bg-gradient-to-tl from-primaryColor-500 to-primaryColor-900 max-sm:w-full max-sm:h-1/3 ">
          <div className=" text-primaryColor-100   self-center">
            <div className="flex justify-center ">
              <label className="font-bold font-mono text-3xl p-2 max-lg:text-2xl max-sm:text-xl">
                New Here?
              </label>
            </div>
            <div className="flex justify-center">
              <label className="font-bold font-mono text-lg text-center p-2 max-sm:text-sm max-lg:text-xl ">
                Revolutionize Attendance with Speed!
              </label>
            </div>
            <div className="flex justify-center mt-10 max-sm:mt-1">
              <Link
                className="text-center text-primaryColor-950  max-sm:text-sm bg-primaryColor-100 rounded-3xl  font-medium tracking-wider uppercase text-lg py-2 mx-auto md:mx-10 w-[50%] md:w-[70%]  xl:w-[50%]  lg:mt-0  xl:ml-10 "
                href="/signup"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        <div className="flex h-full justify-center items-center w-full max-sm:w-full max-sm:h-2/3  ">
          <form className="w-2/3">
            <div className="h-5 w-full mb-3 align-middle py-1 text-center font-bold tracking-wide text-primaryColor-900 font-poppins max-lg:text-xl text-2xl">
              Log in
            </div>
            <div className="h-6 w-full mb-2  text-center align-middle  ">
              <label className="text-center font-thin tracking-wide text-primaryColor-600 font-poppins max-lg:text-xs text-sm">
                Scan Smart, Attend Smarter
              </label>
            </div>
            <div className=" px-40 max-sm:px-10 max-lg:px-20 w-full text-primaryColor-950 rounded-lg  mt-28 max-sm:mt-0 max-sm:w-full max-md:h-full  ">
              {loginField.map((user) => (
                <LoginData user={user} key={user.name} />
              ))}

              <div className="flex justify-center  mt-10 max-sm:mt-1    ">
                <Button
                  onClick={handleSubmit}
                  className=" text-primaryColor-50 font-medium max-sm:text-sm  max-sm:my-5 tracking-wider uppercase text-lg py-2 mx-auto max-lg:text-base md:mx-10 w-[80%] md:w-[70%]  xl:w-[50%] mt-8 lg:mt-0  xl:ml-10 "
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
