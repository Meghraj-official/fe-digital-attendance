"use client";
import React, { useState, useEffect } from "react";
import TypingAnimation from "./TypingAnimation";
import Button from "./Button";
import Link from "next/link";

const LandingPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // This function will be called when the component is mounted
    const timeoutId = setTimeout(() => {
      setShow(!show);
    }, 11000); // 2000 milliseconds (2 seconds)

    // This cleanup function will be called when the component is unmounted
    return () => {
      clearTimeout(timeoutId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex  flex-row   bg-gradient-to-tl from-primaryColor-500 via-slate-500 to-primaryColor-900  h-screen  ">
      <div className="text-white h-full  flex flex-col justify-center w-full lg:w-1/2 xl:pl-20 ">
        <TypingAnimation />

        {show && (
          <Link href="/login">
            <Button
              className=" text-primaryColor-100 font-bold tracking-wider uppercase text-lg py-2 mx-auto md:mx-10 w-[80%] md:w-[70%]  xl:w-[50%] mt-8 lg:mt-0  xl:ml-10 "
              buttonText="Join the revolution"
            />
          </Link>
        )}
      </div>
      <div className="hidden   bg-transparent  md:flex items-center justify-center w-[40%] lg:w-1/2">
        <div
          style={{ backgroundImage: "url('/images/large.jpg')" }}
          className="bg-contain drop-shadow-2xl rounded-md origin-bottom  -rotate-6 scale-90   xl:scale-125 bg-no-repeat h-[400px] w-[400px]     "
        >
          {" "}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
