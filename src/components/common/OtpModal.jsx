"use client";
import { useState } from "react";
import Button from "./Button";
import { useMutation } from "react-query";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

if (typeof window !== "undefined") {
  var email = sessionStorage.getItem("email");
}

const OtpModal = () => {
  const [otpValue, setOtpValue] = useState("");
  const navigate = useRouter();
  const handleChangeOtp = (e) => {
    setOtpValue(e.target.value);
  };
  

  const handleVerifyOtp = () => {
    const otpData = {
      email: email,
      otp: otpValue.trim(),
    };
    return axiosInstance.post(`/auth/verify-otp`, otpData);
  };

  const handleResendOtp = () => {
    const otpData = {
      email: email,
    };
    return axiosInstance.post(`/auth/resend-otp`, otpData);
  };

  const { mutate: mutateResend } = useMutation(handleResendOtp, {
    onSuccess: () => {
      toast.success("OTP send");
      // navigate.push("/login");
    },
    onError: (error) => {
      toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
    },
  });
  const { mutate, isLoading } = useMutation(handleVerifyOtp, {
    onSuccess: () => {
      toast.success("Account created successfully");
      sessionStorage.removeItem("email");
      navigate.push("/login");
    },
    onError: (error) => {
      toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
    },
  });

  return (
    <div className="h-screen w-screen flex items-center bg-primaryColor-100 justify-center">
      <div className="flex flex-col border border-primaryColor-600 bg-primaryColor-50  rounded-xl p-7 gap-1">
        <h2 className="text-xl font-semibold text-center  text-primaryColor-950  font-poppins  ">OTP verification</h2>
        <p className="mb-5 text-primaryColor-500 font-poppins text-center text-sm">Check your email {email} for the otp</p>
        <>
        
          
      
          <label className="mt-2 font-poppins text-sm"htmlFor="email"> OTP</label>
          <input
            className="h-8 border  rounded-md px-2 border-primaryColor-950 "
            type="text"
            value={otpValue}
            onChange={handleChangeOtp}
                    />
        </>
        <div className="flex flex-row justify-center ">
        <Button
          className="border-b w-36 h-8  mt-4 font-poppins text-primaryColor-50"
          buttonText="Verify"
          onClick={mutate}
          isLoading={isLoading}
        />
        </div>
        <button className="text-primaryColor-950 font-poppins mt-1 text-sm" onClick={mutateResend}> Resend OTP </button>
      </div>
      
    </div>
  );
};

export default OtpModal;
