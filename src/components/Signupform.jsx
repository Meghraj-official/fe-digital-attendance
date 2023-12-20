"use client";
import { Input } from "@/components/ui/input";
import Button from "@/components/Button";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  firstName: yup.string().required("Firstname is required"),
  lastName: yup.string().required("Lastname is required"),
  email: yup.string().required("Email is required"),
  password: yup.string().min(6).max(10).required("Password is required"),
  role: yup.string().required("Role is required"),
});

const inputField = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    message: "Firstname is required",
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name",
    message: "Lastname is required",
  },
  {
    name: "email",
    type: "text",
    placeholder: " Email ",
    message: "Email is required",
  },
  {
    name: "password",
    type: "password",
    placeholder: " Password",
    message: "Password is required",
  },
  {
    name: "Confirm Password",
    type: "password",
    placeholder: "Confirm Password",
  },
];

const Data = ({ item, register, errors }) => {
  return (
    <div className="">
      <div className="mb-3 max-lg:mb-1  ">
        <label className=" mb-1 text-sm max-sm:text-xs max-md:text-xs max-lg:text-sm text-primaryColor-950">
          {item.placeholder}
        </label>
      </div>
      <div className="flex mb-3 max-lg:mb-1">
        <Input
          type={item.type}
          {...register(item.name)}
          className="w-full  max-sm:text-xs max-md:text-xs max-lg:text-sm relative focus:border-primaryColor-700 focus:text-primaryColor-950 transition duration-200 input-type "
        />
        <label className="absolute pointer-events-none mt-3 ml-3  max-sm:ml-3 max-sm:mt-3 max-md:text-xs max-lg:text-sm max-sm:text-xs     text-primaryColor-400 text-sm transition duration-200 input-text">
          {item.placeholder}
        </label>
      </div>
      <p className="text-red-500 text-xs">{errors[item.name]?.message}</p>
    </div>
  );
};

console.log(process.env.BASE_URL);
export default function Signupform() {
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
  });

  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/auth/signup`,
        {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          role: data.role,
        }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
    console.log(data);
  };

  return (
    <div className="h-screen w-screen bg-primaryColor-100  max-sm:h-screen max-sm:w-screen flex  ">
      <div className=" flex w-1/2 bg-gradient-to-tl from-primaryColor-500 to-primaryColor-900 max-sm:hidden  bg-red-800   ">
        <div className="relative  w-full h-full">
          <Image
            className="object-cover object-center"
            src="/images/bw.jpg"
            alt="qr code"
            layout="fill"
          />
        </div>
      </div>
      <div className="w-1/2 h-full max-sm:w-full flex justify-center items-center  ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
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
              <Data
                register={register}
                item={item}
                key={item.name}
                errors={errors}
              />
            ))}

            <div className="flex flex-col max-lg:text-sm max-sm:text-xs  mb-2">
              <div className=" max-md:text-xs text-sm">
                <label>Role</label>
              </div>

              <div className=" flex justify-between  max-md:text-xs py-1  ">
                <div className=" flex justify-between text-primaryColor-950 max-md:text-xs  text-sm">
                  <input type="radio" {...register("role")} value={"teacher"} />
                  Teacher
                </div>
                <div className="  max-sm:ml-5 text-primaryColor-950 max-md:text-xs text-sm">
                  <input type="radio" {...register("role")} value={"student"} />
                  Student
                </div>
              </div>
              <p className="text-red-500 text-xs">{errors.role?.message}</p>
            </div>
          </div>

          <div className="flex justify-center mb-2 max-lg:mb-0 text-sm max-sm:mb-1  max-lg:text-xs max-lg:mt-0">
            Already have an account?
            <Link href="/login" className="underline font-semibold ml-3">
              Login
            </Link>
          </div>

          <div className="flex justify-center  max-sm:mt-1 mt-3  px-40 max-lg:px-20">
            <Button
              className=" text-primaryColor-50 font-medium max-sm:text-sm  max-sm:my-5 tracking-wider uppercase text-lg py-2 mx-auto max-lg:text-base md:mx-10 w-[80%] md:w-[70%]  xl:w-[50%] mt-8 lg:mt-0  xl:ml-10 "
              buttonText="Sign Up"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
