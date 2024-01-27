import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import axiosInstance from "@/lib/axios";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation } from "react-query";
import RhfSelect from "../reactHookForms/RhfSelect";
import CustomInput from "../dashboard/common/CustomInput";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./Button";
import { createCourseSchema } from "@/lib/validations/CourseValidation";

const AddCourse = () => {
  const { mutate } = useMutation(async (body) => {
    return await axiosInstance.post("/course/create", body);
  });
  const methods = useForm({ resolver: yupResolver(createCourseSchema) });
  const {
    handleSubmit,
    // formState: { isDirty },
  } = methods;
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log("hello", data);
    mutate(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex   p-2 rounded-md bg-primaryColor-300 font-medium ">
          Add Course{" "}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primaryColor-200">
        <DialogHeader>
          <DialogTitle>Add Course</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className=" flex flex-col gap-3">
              <CustomInput
                name="name"
                id="name"
                labelName="Course Name"
                placeholder="Bachelor in Science"
              />
              <CustomInput
                name="code"
                id="code"
                labelName="Course Code"
                placeholder="BSc"
              />

              <div>
                <RhfSelect
                  name="courseType"
                  placeholder=" Select Course Type"
                  options={[
                    { label: "Yearly", value: "YEARLY" },
                    { label: "Semester", value: "SEMESTER" },
                  ]}
                />
              </div>
            </div>
            <DialogFooter className="my-3">
              <Button
                buttonText="Add Course"
                type="submit"
                className="w-full py-2 text-white mt-3  "
              />
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourse;
