import { Input } from "@/components/ui/input";
import React from "react";
import { useFormContext } from "react-hook-form";

const CustomInput = ({ name, id, labelName, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className=" text-sm">
        {labelName}
      </label>
      <Input {...register(name)} id={id} placeholder={placeholder} />

      {errors && (
        <p className="text-xs text-red-700">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default CustomInput;
