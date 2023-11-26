import Link from "next/link";
import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <>
      <div className="fixed -z-10 h-screen w-screen 	">
        <Image
          src="/qrcode.jpg"
          alt="qr code"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="h-52 float-right mr-1  mt-32  p-2 max-sm:float-right">
        <h1 className="font-bold text-7xl text-center max-sm:text-4xl ">
          Go Digital
        </h1>
        <h3 className="font-medium text-5xl text-center mt-5 max-sm:text-2xl max-sm:mt-2 ">
          with your attendance
        </h3>
        <div className="flex justify-center mt-20 max-sm:mt-10">
          <Link href="/login">
            {" "}
            <button className="bg-cyan-500 rounded-lg w-32 h-14 p-3">
              Get Started
            </button>
          </Link>{" "}
        </div>
      </div>
    </>
  );
};

export default Landing;
