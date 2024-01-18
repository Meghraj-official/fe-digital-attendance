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
      render={({ field: { onChange, value } }) => (
        <Select
          onValueChange={onChange}
          defaultValue={value}
          className="bg-primaryColor-50 h-full  outline-none border  border-primaryColor-800 rounded-md text-center custom-select "
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
      )}
    />
  );
};

export default RhfSelect;
