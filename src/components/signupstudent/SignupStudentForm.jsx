"use client";
import { Input } from "@/components/ui/input";
import Button from "@/components/common/Button";
import Link from "next/link";
import Image from "next/image";
import { useForm, FormProvider } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "@/lib/axios";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";

import RhfSelect from "../reactHookForms/RhfSelect";
import { courseOptions, semesterOptions, yearOptions } from "@/lib/data/signup";
import toast from "react-hot-toast";

const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required").min(6).max(10),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  rollNo: yup.string().required("Roll number is required").nullable(),
});

const inputField = [
  {
    name: "fullName",
    type: "text",
    placeholder: "Full Name",
  },

  {
    name: "email",
    type: "text",
    placeholder: "Email",
  },
  {
    name: "rollNo",
    type: "number",
    placeholder: "Roll Number",
  },
  {
    name: "batch",
    type: "text",
    placeholder: "Batch",
  },
  {
    name: "password",
    type: "password",
    placeholder: "Password",
  },
  {
    name: "confirmpassword",
    type: "password",
    placeholder: "Confirm Password",
  },
];

const sectionField = [
  {
    name: "section",
    type: "text",
    placeholder: "Section",
  },
];

const Data = ({ item, register, errors }) => {
  return (
    <div className="">
      {/* <div className="mb-3 max-lg:mb-1  ">
        <label className=" mb-1 text-sm max-sm:text-xs max-md:text-xs max-lg:text-sm text-primaryColor-950">
          {item.placeholder}
        </label>
      </div> */}
      <div className="flex  max-lg:mb-1">
        <Input
          placeholder=""
          autoComplete="off"
          type={item.type}
          {...register(item.name)}
          className="w-full bg-primaryColor-50  max-sm:text-xs max-md:text-xs max-lg:text-sm relative focus:border-primaryColor-700 focus:text-primaryColor-950 transition duration-200 input-type "
        />
        <label className="absolute pointer-events-none mt-3 ml-3  max-sm:ml-3 max-sm:mt-3 max-md:text-xs max-lg:text-sm max-sm:text-xs scale-100  text-primaryColor-400 text-sm transition duration-200 input-text">
          {item.placeholder}
        </label>
      </div>
      <p className="text-red-500 mb-3 text-xs max-sm:text-[10px]">
        {errors[item.name]?.message}
      </p>
    </div>
  );
};

const signupApi = (data) => {
  return axiosInstance.post(`/auth/signup-student`, data);
};

export default function SignupStudentForm() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });
  const { handleSubmit, register, formState, watch } = methods;

  const navigate = useRouter();

  const { mutate, isLoading } = useMutation(signupApi, {
    onSuccess: () => {
      toast.success("Account created successfully");
      navigate.push("/verify-email?type=student");
    },
    onError: (error) => {
      toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
    },
  });
  const isYearly = watch("courseType") === "YEARLY";

  const { errors } = formState;

  const onSubmit = async (data) => {
    data.courseType === "YEARLY" ? delete data?.semester : delete data?.year;

    delete data?.confirmpassword;
    mutate(data);
  };

  return (
    <div className="min-h-screen  w-full  bg-primaryColor-100  max-sm:h-screen max-sm:w-screen flex  ">
      <div className=" flex w-1/2 bg-gradient-to-tl from-primaryColor-500 to-primaryColor-900 max-sm:hidden  bg-red-800   ">
        <div className="relative  w-full h-full">
          <Image
            className="object-cover object-center"
            src="/images/stupic.jpg"
            alt="qr code"
            layout="fill"
          />
        </div>
      </div>
      <div className="w-1/2 h-screen   max-sm:w-full flex justify-center items-center ">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full">
            <div className="h-8 w-full text-center  py-1 ">
              <label className="text-center max-sm:hidden font-bold tracking-wide text-primaryColor-900 font-poppins max-sm:sm max-lg:text-xl text-2xl">
                SignUp
              </label>
            </div>
            <div className="h-6 w-full mb-2 max-sm:mb-0  text-center align-middle  ">
              <label className="text-center font-thin tracking-wide text-primaryColor-600 font-poppins max-lg:text-xs text-sm">
                Transform Attendance with a Scan
              </label>
            </div>
            <div className="px-40 max-sm:px-10 max-lg:px-20 text-primaryColor-950 rounded-lg  max-sm:w-full max-sm:h-full ">
              {inputField.slice(0, 2).map((item) => (
                <Data
                  register={register}
                  item={item}
                  key={item.name}
                  errors={errors}
                />
              ))}

              <div className="flex h-10 w-full justify-between gap-2 flex-row max-lg:text-sm max-sm:text-xs text-sm  mb-3">
                {" "}
                <div className=" border h-10 w-1/2 border-primaryColor-900 rounded-md text-center bg-primaryColor-50 ">
                  <RhfSelect
                    placeholder="Course Type"
                    name="courseType"
                    options={[
                      { label: "Yearly", value: "YEARLY" },
                      { label: "Semester", value: "SEMESTER" },
                    ]}
                  />
                </div>
                <div className=" border h-10 w-1/2 border-primaryColor-900 rounded-md text-center bg-primaryColor-50 ">
                  <RhfSelect
                    placeholder="Choose Course"
                    name="courseCode"
                    options={courseOptions}
                  />
                </div>
              </div>
              <div className="flex h-10 w-full justify-between gap-2 flex-row max-lg:text-sm max-sm:text-xs text-sm  mb-3">
                <div className=" w-1/2 h-full outline-none rounded-md bg-primaryColor-50  text-center">
                  <RhfSelect
                    placeholder={isYearly ? "Select Year" : "Select Semester"}
                    name={isYearly ? "year" : "semester"}
                    options={isYearly ? yearOptions : semesterOptions}
                  />
                </div>
                {sectionField.map((item) => (
                  <Data
                    register={register}
                    item={item}
                    key={item.name}
                    errors={errors}
                  />
                ))}

                {/* <div className=" w-1/2 h-full outline-none rounded-md bg-primaryColor-50  text-center">
                  <RhfSelect
                    placeholder={isYearly ? "Select Year" : "Select Semester"}
                    name={isYearly ? "year" : "semester"}
                    options={isYearly ? yearOptions : semesterOptions}
                  />
                </div> */}
              </div>

              {inputField.slice(2).map((item) => (
                <Data
                  register={register}
                  item={item}
                  key={item.name}
                  errors={errors}
                />
              ))}
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
                buttonText={isLoading ? "Signing up..." : "Sign Up"}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
