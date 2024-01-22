import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Controller, useFormContext } from "react-hook-form";

const RhfSelect = (props) => {
  const { placeholder, options, name } = props;
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div>
          <Select
            onValueChange={onChange}
            defaultValue={value}
            className="bg-primaryColor-50 h-full   outline-none border  border-primaryColor-800 rounded-md text-center custom-select "
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
          {error && (
            <p className="text-red-500 bg-primaryColor-100   text-xs max-sm:text-[10px] text-left">
              {error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

export default RhfSelect;
