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
import { sectionOptions } from "@/lib/data/signup";
import toast from "react-hot-toast";
import { useCourseStore } from "@/store/courseStore";
import { useEffect } from "react";
import {
  categorizeCourses,
  convertToCustomFormat,
} from "@/lib/helpers/CourseFormatter";

const schema = yup.object({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required").min(6),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  rollNo: yup.string().required("Roll number is required").nullable(),
  courseType: yup.string().required("Select Course Type"),
  courseCode: yup.string().required("Select Course"),
  // year: yup.string().when("courseType", {
  //   is: (isYearly) => isYearly === "YEARLY",
  //   then: (schema) => schema.required("Year is required"),
  //   otherwise: (schema) => schema.nullable(),
  // }),
  // semester: yup.string().when("courseType", {
  //   is: (isYearly) => isYearly === "SEMESTER",
  //   then: (schema) => schema.required("Semester is required"),
  //   otherwise: (schema) => schema.nullable(),
  // }),
  section: yup.string().required("Section is required").min(1).max(1),
  // batch: yup.string().required("Batch is required"),
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
    name: "batch",
    type: "text",
    placeholder: "Batch",
  },
  {
    name: "rollNo",
    type: "number",
    placeholder: "Roll Number",
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

const Data = ({ item, register, errors }) => {
  return (
    <div className="">
      <div className="flex ">
        <Input
          placeholder="relative"
          autoComplete="off"
          type={item.type}
          {...register(item.name)}
          className="w-full bg-primaryColor-50   max-md:text-xs max-lg:text-sm relative focus:border-primaryColor-700 focus:text-primaryColor-950 border-primaryColor-500 transition duration-200 input-type "
        />
        <label className=" absolute pointer-events-none mt-3 ml-3  max-sm:ml-3 max-sm:mt-3 max-md:text-xs max-lg:text-sm max-sm:text-xs scale-100  text-primaryColor-400 text-sm transition duration-200 input-text">
          {item.placeholder}
        </label>
      </div>
      <p className="text-red-700 mb-3 text-left text-xs max-sm:text-[10px]">
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
    // defaultValues: {
    //   courseType: "SEMESTER",
    // },
    resolver: yupResolver(schema),
  });
  const { handleSubmit, register, formState, watch } = methods;

  const navigate = useRouter();

  const { mutate, isLoading } = useMutation(signupApi, {
    onSuccess: () => {
      toast.success("Account created successfully");
      navigate.push("/verify-email");
    },
    onError: (error) => {
      sessionStorage.removeItem("email");
      toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
    },
  });
  const isYearly = watch("courseType") === "YEARLY";

  const { errors } = formState;

  const onSubmit = async (data) => {
    sessionStorage.setItem("email", data.email);
    const date = new Date();
    const year = date.getFullYear();

    const inputData =
      data.courseType === "YEARLY"
        ? { ...data, year: "1", batch: year.toString() }
        : { ...data, semester: "1", batch: year.toString() };
    delete inputData?.confirmpassword;

    mutate(inputData);
  };
  const { courses, getCourses } = useCourseStore((state) => state);

  useEffect(() => {
    getCourses();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen overflow-y-scroll relative w-full  bg-primaryColor-100 max-sm:h-screen max-sm:w-screen flex  ">
      <div className="flex w-1/2  bg-gradient-to-tl from-primaryColor-500 to-primaryColor-900 max-sm:hidden  bg-red-800 items-center ">
        <div className="relative w-full h-full">
          <Image
            className="object-cover object-center"
            src="/images/stupic.jpg"
            alt="qr code"
            layout="fill"
          />
        </div>
      </div>

      <div className="w-1/2 h-screen  flex justify-center items-center  max-sm:w-full   ">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full  ">
            <div className="h-8 w-full text-center  py-1 ">
              <label className="text-center  font-bold tracking-wide text-primaryColor-900 font-poppins max-sm:text-sm max-lg:text-xl text-2xl">
                SignUp
              </label>
            </div>
            <div className="h-6 w-full mb-2 max-sm:mb-4  text-center align-middle  ">
              <label className="text-center font-thin tracking-wide text-primaryColor-600 font-poppins max-lg:text-xs text-sm">
                Transform Attendance with a Scan
              </label>
            </div>
            <div className="  px-40 max-sm:px-10 max-lg:px-20 text-primaryColor-950 rounded-lg  max-sm:w-full  ">
              {inputField.slice(0, 2).map((item) => (
                <Data
                  register={register}
                  item={item}
                  key={item.name}
                  errors={errors}
                />
              ))}

              <div className="flex h-fit w-full justify-between gap-2 flex-row max-lg:text-sm max-sm:text-xs text-sm  mb-3 ">
                {" "}
                <div className="  h-fit w-full  rounded-md text-center   ">
                  <RhfSelect
                    placeholder="Course Type"
                    name="courseType"
                    options={[
                      { label: "Yearly", value: "YEARLY" },
                      { label: "Semester", value: "SEMESTER" },
                    ]}
                  />
                </div>
                {/* <div className="w-1/2 h-fit outline-none rounded-md text-center  ">
                  <RhfSelect
                    placeholder={isYearly ? "Select Year" : "Select Semester"}
                    name={isYearly ? "year" : "semester"}
                    options={isYearly ? yearOptions : semesterOptions}
                  />
                </div> */}
              </div>
              <div className="flex w-full justify-between gap-2 flex-row max-lg:text-sm max-sm:text-xs text-sm ">
                <div className=" h-fit  w-1/2 rounded-md text-center  ">
                  <RhfSelect
                    placeholder="Course"
                    name="courseCode"
                    options={
                      courses?.courses?.length > 0
                        ? isYearly
                          ? convertToCustomFormat(
                              categorizeCourses(courses?.courses).yearly
                            )
                          : convertToCustomFormat(
                              categorizeCourses(courses?.courses).semester
                            )
                        : []
                    }
                  />
                </div>
                <div className=" w-1/2 h-full mb-3 outline-none rounded-md text-center">
                  <RhfSelect
                    placeholder="Select Section"
                    name="section"
                    options={sectionOptions}
                  />
                </div>
              </div>

              {/* <div className="mb-3">
                <RhfSelect
                  placeholder="Batch"
                  name="batch"
                  options={batchOptions}
                />
              </div> */}

              {inputField.slice(3).map((item) => (
                <Data
                  register={register}
                  item={item}
                  key={item.name}
                  errors={errors}
                />
              ))}
            </div>

            <div className="flex justify-center  mb-2 max-lg:mb-0 text-sm max-sm:mb-1  max-lg:text-xs max-lg:mt-0">
              Already have an account?
              <Link href="/login" className="underline font-semibold ml-3">
                Login
              </Link>
            </div>

            <div className="flex justify-center  max-sm:mt-1 mt-3   px-40 max-lg:px-20">
              <Button
                className=" text-primaryColor-50 font-medium max-sm:text-sm  max-sm:my-5 tracking-wider uppercase text-lg py-2 mx-auto max-lg:text-base md:mx-10 w-[80%] md:w-[70%]  xl:w-[50%] mt-8 lg:mt-0  xl:ml-10 "
                buttonText="Sign Up"
                isLoading={isLoading}
                disabled={isLoading}
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
