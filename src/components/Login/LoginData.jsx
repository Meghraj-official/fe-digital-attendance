import React from "react";
import { Input } from "../ui/input";

const LoginData = ({ user, register, errors }) => {
  return (
    <div className="flex-col mb-3  max-lg:mb-1 ">
      <div className="mb-3 max-md:mb-1 max-lg:mb-2">
        <label className=" max-sm:text-xs max-md:text-xs max-lg:text-sm text-primaryColor-950 ">
          {user.placeholder}
        </label>
      </div>
      <div className="flex  max-md-md:md-2">
        <Input
          type={user.type}
          {...register(user.name, {
            required: {
              value: true,
            },
          })}
          className="  w-full  max-sm:text-xs max-md:text-xs max-lg:text-sm    focus:border-primaryColor-700 focus:text-primaryColor-950 transition duration-200 input-type "
        />
        <label className="absolute pointer-events-none ml-3 mt-3 max-sm:mt-3 max-sm:ml-3 max-md:text-xs max-lg:text-sm max-sm:text-xs   text-primaryColor-400 text-sm transition duration-200 input-text  ">
          {user.placeholder}
        </label>
      </div>
      <p className="text-red-500 text-xs ">{errors[user.name]?.message}</p>
    </div>
  );
};

export default LoginData;
