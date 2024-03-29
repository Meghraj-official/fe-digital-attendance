"use client";
import Link from "next/link";
import Button from "../common/Button";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useAuthStore } from "@/store/authStore";
import { useMutation } from "react-query";
import { useRouter } from "next/navigation";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import LoginData from "./LoginData";
import Spinner from "../common/Spinner";

const schema = yup.object({
  email: yup.string().email().required("Email is required"),
  password: yup.string().required("Password is required").min(6),
});

const loginField = [
  {
    name: "email",
    type: "text",
    placeholder: " Email",
    message: "email is required",
  },
  {
    name: "password",
    type: "password",
    placeholder: " Password",
    message: "password is required",
  },
];

const loginApi = (data) => {
  return axiosInstance.post(`/auth/signin`, data);
};

export default function Loginform() {
  const { setAuth } = useAuthStore();

  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(schema),
  });
  const { errors } = formState;

  const router = useRouter();
  const { mutate, isLoading } = useMutation(loginApi, {
    onSuccess: (data) => {
      setAuth({
        isAuth: true,
        token: data?.data?.accessToken,
        userType: data?.data?.userType,
      });
      toast.success("Login Success");
      router.push("/dashboard");
    },
    onError: (error) => {
      toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
    },
  });

  const onSubmit = async (data) => {
    mutate(data);
  };

  return (
    <>
      <div className="h-screen w-screen  bg-primaryColor-100  max-sm:h-screen max-sm:w-screen flex flex-row max-sm:flex-col">
        <div className="flex justify-center w-1/2  max-w-sm:flex-row  bg-gradient-to-tl from-primaryColor-500 to-primaryColor-900 max-sm:w-full max-sm:h-1/3">
          <div className=" text-primaryColor-100 flex justify-center flex-col   self-center">
            <div className="flex  justify-center ">
              <label className="font-bold font-mono text-3xl p-2 max-lg:text-2xl max-sm:text-xl">
                New Here?
              </label>
            </div>
            <div className="flex  justify-center">
              <label className="font-bold font-mono text-lg text-center p-2 max-sm:text-sm max-lg:text-xl ">
                Revolutionize Attendance with Speed!
              </label>
            </div>
            <div className="flex flex-col gap-2  lg:flex-col xl:flex-row sm:gap-1  sm:space-y-6 xl:space-y-0 space-y-0  items-center lg:justify-center  mt-10 max-sm:mt-1  ">
              <div>
                <Link
                  className=" text-center  text-primaryColor-950  text-xs bg-primaryColor-50 hover:bg-primaryColor-900 focus:bg-primaryColor-800 hover:text-primaryColor-50 rounded-3xl  font-medium  uppercase md:text-base
                 py-1 px-2 md:py-2 lg:px-5 mx-auto md:mx-10 w-[50%] md:w-[70%]  xl:w-[50%]  lg:mt-0  xl:ml-10 "
                  href={`/signup?type=teacher`}
                >
                  Sign Up As Teacher
                </Link>
              </div>
              <div>
                <Link
                  className=" text-center  text-primaryColor-950  text-xs bg-primaryColor-50 hover:bg-primaryColor-900 focus:bg-primaryColor-800 hover:text-primaryColor-50 rounded-3xl  font-medium  uppercase md:text-base 
                   py-1 px-2 md:py-2 lg:px-5 mx-auto md:mx-10 w-[50%] md:w-[70%]  xl:w-[50%]  lg:mt-0  xl:ml-10 "
                  href={`/signup?type=student`}
                >
                  Sign Up As Student
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-1/2 h-full justify-center items-center  max-sm:w-full max-sm:h-2/3 ">
          <form onSubmit={handleSubmit(onSubmit)} className=" w-full">
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
                <LoginData
                  register={register}
                  user={user}
                  key={user.name}
                  errors={errors}
                />
              ))}

              <div className="flex justify-center  mt-10 max-sm:mt-1    ">
                <Button
                  className=" text-primaryColor-50  font-medium max-sm:text-sm  max-sm:my-5 tracking-wider uppercase text-lg py-2 mx-auto max-lg:text-base md:mx-10 w-[80%] md:w-[70%]  xl:w-[50%] mt-8 lg:mt-0  xl:ml-10 "
                  buttonText={isLoading ? <Spinner /> : "Login"}
                  isLoading={isLoading}
                  disabled={isLoading}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
