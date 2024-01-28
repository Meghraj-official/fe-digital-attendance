import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

const Selector = (props) => {
  const { placeholder, options, name, labelName } = props;
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="flex flex-col items-start gap-2">
          <label htmlFor={name}> {labelName} </label>
          <Select
            onValueChange={onChange}
            defaultValue={value}
            className="bg-primaryColor-50 h-full   outline-none border  border-primaryColor-800 rounded-md text-center custom-select "
          >
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent className="bg-primaryColor-50 ">
              {options?.map((option) => {
                const value = {
                  courseCode: option?.code,
                  courseType: option?.courseType,
                };

                return (
                  <SelectItem value={JSON.stringify(value)} key={option.code}>
                    {option?.name}
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
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

export default Selector;
