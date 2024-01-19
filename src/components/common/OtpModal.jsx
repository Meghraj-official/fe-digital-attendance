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
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col border border-primaryColor-800 rounded-xl p-6  gap-5">
        <h2 className="text-3xl font-bold text-center">Verify OTP</h2>
        <>
          <label htmlFor="email"> Email</label>
          <input
            className="h-10 border border-primaryColor-900 "
            name="email"
            type="email"
            value={email}
            // onChange={handleChangeEmail}
          />
        </>

        <>
          <label htmlFor="email"> OTP</label>
          <input
            className="h-10 border border-primaryColor-900 "
            type="text"
            value={otpValue}
            onChange={handleChangeOtp}
          />
        </>
        <Button
          className="py-3 text-white"
          buttonText="Verify"
          onClick={mutate}
          isLoading={isLoading}
        />
        <button onClick={mutateResend}> Resend OTP </button>
      </div>
    </div>
  );
};

export default OtpModal;
