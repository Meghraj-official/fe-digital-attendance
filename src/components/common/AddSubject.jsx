import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm, FormProvider } from "react-hook-form";
import axiosInstance from "@/lib/axios";
import { useMutation } from "react-query";
import CustomInput from "../dashboard/common/CustomInput";
import Button from "./Button";
import Selector from "./Selector";
import RhfSelect from "../reactHookForms/RhfSelect";
import { semesterOptions, yearOptions } from "@/lib/data/signup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSubjectSchema } from "@/lib/validations/CourseValidation";

const AllCourses = [
  {
    _id: "65a988d3242f4a886b328207",
    name: "Bachelors in Business Administration",
    code: "BSC CSIT",
    courseType: "YEARLY",
    __v: 0,
    years: {
      first: ["CSC3"],
      second: ["CSC3"],
      third: ["CSC3"],
      fourth: ["CSC3"],
      _id: "65abe856ad4f513623f89f34",
    },
  },
  {
    _id: "65a98e576d88f5b723d37d02",
    name: "Bachelors in Business Administration",
    code: "BBA",
    courseType: "SEMESTER",
    semesters: {
      first: ["CSC3"],
      second: ["CSC3"],
      third: ["CSC3"],
      fourth: ["CSC3"],
      fifth: ["CSC3"],
      sixth: ["CSC3"],
      seventh: ["CSC3"],
      eighth: ["CSC3"],
      _id: "65a98e576d88f5b723d37d03",
    },
    __v: 0,
  },
];

const AddSubject = () => {
  // { resolver: yupResolver(createCourseSchema) }
  const methods = useForm({
    resolver: yupResolver(createSubjectSchema),
  });
  const { handleSubmit, watch } = methods;

  const { mutate } = useMutation(async (body) => {
    return await axiosInstance.post("/subject/create", body);
  });
  const course = watch("course");
  const courseType = course && JSON.parse(course).courseType;
  const isYearly = courseType === "YEARLY";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex   p-2 rounded-md bg-primaryColor-300 font-medium ">
          Add Subject{" "}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primaryColor-200">
        <DialogHeader>
          <DialogTitle>Add Subject</DialogTitle>
        </DialogHeader>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => {
              const appendData = JSON.parse(data.course);
              const formatData = { ...data, ...appendData };
              formatData.courseType === "YEARLY"
                ? delete formatData?.semester
                : delete formatData?.year;
              delete formatData.course;
              mutate(data);
            })}
          >
            {" "}
            <div className="flex flex-col gap-3">
              <CustomInput name="name" id="name" labelName="Subject Name" />
              <CustomInput name="code" id="code" labelName="Subject Code" />
              <Selector
                name="course"
                labelName="Select Course"
                placeholder="Choose course"
                options={AllCourses}
              />
              <RhfSelect
                placeholder={isYearly ? "Select Year" : "Select Semester"}
                name={isYearly ? "year" : "semester"}
                options={isYearly ? yearOptions : semesterOptions}
              />
            </div>
            <DialogFooter>
              <Button
                buttonText="Add Subject"
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

export default AddSubject;
