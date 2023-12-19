"use client";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
import { RadioGroup } from "@/components/ui/radio-group";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";

const inputField = [
  { name: "FullName", type: "text", placeholder: "Full name" },
  { name: "Email", type: "text", placeholder: " Email " },
  { name: "Password", type: "password", placeholder: " Password" },
  {
    name: "Confirm Password",
    type: "password",
    placeholder: "Confirm Password",
  },
];

const Data = ({ item, register }) => {
  return (
    <div className="">
      <div className="mb-2 max-lg:mb-1  ">
        <label className="  max-sm:text-xs max-md:text-xs max-lg:text-sm text-primaryColor-950">
          {item.name}
        </label>
      </div>
      <div className="flex mb-3 max-lg:mb-1">
        <Input
          required
          type={item.type}
          {...register(item.name)}
          className="w-full    max-sm:text-xs max-md:text-xs max-lg:text-sm relative focus:border-primaryColor-700 focus:text-primaryColor-950 transition duration-200 input-type "
        />
        <label className="absolute pointer-events-none mt-3 ml-3 max-sm:ml-3 max-sm:mt-3 max-md:text-xs max-lg:text-sm max-sm:text-xs     text-primaryColor-400 text-sm transition duration-200 input-text">
          {item.placeholder}
        </label>
      </div>
    </div>
  );
};

export default function Signupform() {
  const methods = useForm();

  const { handleSubmit, register } = methods;

  const onSubmit = (data) => {
    console.log(data);
    alert("hello ");
  };

  return (
    <div className="h-screen w-screen bg-primaryColor-100  max-sm:h-screen max-sm:w-screen flex  ">
      <div className=" flex w-1/3 bg-gradient-to-tl from-primaryColor-500 to-primaryColor-900 max-sm:hidden    ">
        <div className="relative  w-full h-full">
          <Image
            className="object-cover object-center"
            src="/images/bw.jpg"
            alt="qr code"
            layout="fill"
          />
        </div>
      </div>
      <div className="w-2/3 max-sm:w-full ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="h-8 w-full text-center  py-1 ">
            <label className="text-center font-bold tracking-wide text-primaryColor-900 font-poppins max-lg:text-xl text-2xl">
              SignUp
            </label>
          </div>
          <div className="h-6 w-full mb-2  text-center align-middle  ">
            <label className="text-center font-thin tracking-wide text-primaryColor-600 font-poppins max-lg:text-xs text-sm">
              Transform Attendance with a Scan
            </label>
          </div>
          <div className="px-40 max-sm:px-10 max-lg:px-20 text-primaryColor-950 rounded-lg  max-sm:w-full max-sm:h-full ">
            {inputField.map((item) => (
              <Data register={register} item={item} key={item.name} />
            ))}

            <div className="flex flex-col max-lg:text-sm  max-sm:text-xs  mb-2">
              <div className=" max-md:text-xs ">
                <label>Role</label>
              </div>

              <div className="  max-md:text-xs py-1 flex">
                <RadioGroup defaultValue="Teacher">
                  <div className="flex ">
                    <div className="flex items-center space-x-2  text-primaryColor-950 max-md:text-xs max-lg:text-sm">
                      <input
                        type="radio"
                        name={"Role"}
                        {...register("Role")}
                        value={"Teacher"}
                      />
                      Teacher
                    </div>
                    <div className="flex items-center space-x-2 ml-10 max-sm:ml-5   text-primaryColor-950 max-md:text-xs max-lg:text-sm">
                      <input
                        type="radio"
                        name={"gender"}
                        {...register("Role")}
                        value={"Student"}
                      />
                      Student
                    </div>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="flex justify-center mb-2 max-lg:mb-0 text-sm max-sm:mb-1  max-lg:text-xs max-lg:mt-0">
              Already have an account?
              <Link href="/login" className="underline font-semibold">
                Login
              </Link>
            </div>

            <div className="flex justify-center  ">
              <Button
                className=" text-primaryColor-200 align-middle  font-medium tracking-wider uppercase text-lg max-lg:text-base py-2  md:mx-10 w-[80%] md:w-[70%]  xl:w-[50%] mt-4 lg:mt-0  xl:ml-10   "
                buttonText="Sign Up"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
