import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

const RhfSelect = (props) => {
  const { label, placeholder, options, name } = props;
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className=" flex  flex-col items-start ">
          <label className="text-sm ">{label}</label>
          <div className="bg-primaryColor-50 rounded-md w-full">
            <Select
              onValueChange={onChange}
              defaultValue={value}
              className="bg-primaryColor-50 h-full   outline-none border  border-primaryColor-800 rounded-md text-center "
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="bg-primaryColor-50 ">
                {options?.map((option) => (
                  <SelectItem value={option?.value} key={option.value}>
                    {option?.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {error && (
            <p className="text-red-700 text-xs max-sm:text-[10px] text-left">
              {error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default RhfSelect;
