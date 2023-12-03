"use client";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";

const inputField = [
  { name: "Full Name", type: "text", placeholder: "Full name" },
  { name: "Email", type: "text", placeholder: " Email " },
  { name: "Password", type: "password", placeholder: " Password" },
  {
    name: "Confirm Password",
    type: "password",
    placeholder: "Confirm Password",
  },
];
const Data = (item, index) => {
  return (
    <div key={index} className=" max-lg:mb-1">
      <div className="mb-1 ">
        <label className="   max-sm:text-xs max-md:text-xs max-lg:text-sm font-semibold text-primaryColor-50">
          {item.name}
        </label>
      </div>
      <div className="flex mb-2 xl:mb-4">
        <Input
          required
          type={item.type}
          className="w-full h-10 xl:h-12 text-md focus:bg-white/80  bg-primaryColor-300 border-none focus:border-2 focus:border-primaryColor-200    relative  focus:text-primaryColor-900 transition duration-200 input-type "
        />
        {/* <label className="absolute pl-3  mt-2 p-1 bg-transparent max-sm:mt-1 max-md:text-xs max-lg:text-sm max-sm:text-xs     text-primaryColor-50 text-sm transition duration-200 input-text">
          {item.placeholder}
        </label> */}
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
      <div
        // style={{ background: ` url("/images/bg.jpg")` }}
        className="h-screen w-screen bg-gradient-to-tl from-primaryColor-500 to-primaryColor-900  max-sm:h-screen max-sm:w-screen flex   justify-around "
      >
        <div className=" lg:flex w-[40%]  brightness-95 hidden  ">
          <div className="relative w-[80%] lg:w-[70%] h-[90%] shadow-lg mx-auto my-auto rounded-lg   ">
            <Image
              className=" rounded-lg bg-cover bg-center"
              src="/images/bg.jpg"
              alt="qr code"
              layout="fill"
            />
          </div>
        </div>

        <div
          className="lg:w-[60%] w-full h-full flex justify-center items-center "
          // style={{ background: ` url("/images/bg.jpg")` }}
        >
          <div className=" w-full h-full flex items-center lg:pr-24">
            <form
              onSubmit={handleSubmit}
              className="px-8 py-5 rounded-md h-full xl:h-[90%] w-full flex justify-center flex-col  "
            >
              <div className="h-5 w-full mb-8 xl:mb-10 text-left ">
                <label className="flex flex-col gap-1 font-bold text-white font-poppins ">
                  <span className="text-4xl"> Sign Up /</span>
                  <span className="text-sm font-medium tracking-wide">
                    {" "}
                    To join the revolution{" "}
                  </span>
                </label>
              </div>
              <div className="h-auto w-auto my-5 text-primaryColor-950 rounded-lg  max-sm:w-full max-sm:h-full max-md:h-full ">
                {inputField.map(Data)}

                <div className="flex flex-col max-lg:text-sm  max-sm:text-xs  mb-2">
                  <div className=" p-2 font-bold text-primaryColor-50  max-md:text-xs ">
                    <label>Role</label>
                  </div>

                  <div className=" px-2   max-md:text-xs">
                    <RadioGroup className="flex gap-8">
                      <div className="flex items-center space-x-2  text-primaryColor-200 font-medium max-md:text-xs max-lg:text-sm">
                        <RadioGroupItem
                          className="mr-2 h-5 w-5"
                          value="Teacher"
                        />
                        Teacher
                      </div>
                      <div className="flex items-center  space-x-2   text-primaryColor-200 font-medium max-md:text-xs max-lg:text-sm">
                        <RadioGroupItem
                          className="mr-2  h-5 w-5"
                          value="Student"
                        />
                        Student
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="flex lg:justify-center items-center my-3  ">
                  <Button
                    className=" text-primaryColor-200 w-full lg:w-[60%] mt-3 hover:text-primaryColor-950 font-bold   tracking-wider uppercase text-lg max-lg:text-base py-1 lg:py-2   xl:ml-10   "
                    buttonText="Sign Up"
                  />
                </div>
                <div className="flex justify-center  mb-2 text-sm md:text-md max-lg:mt-1">
                  <label>
                    Already have an account?
                    <Link
                      href="/login"
                      className="underline mx-2 font-semibold"
                    >
                      Login
                    </Link>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
