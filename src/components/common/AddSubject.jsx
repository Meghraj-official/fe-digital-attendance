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
import { useMutation, useQuery } from "react-query";
import CustomInput from "../dashboard/common/CustomInput";
import Button from "./Button";
import Selector from "./Selector";
import RhfSelect from "../reactHookForms/RhfSelect";
import { semesterOptions, yearOptions } from "@/lib/data/signup";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSubjectSchema } from "@/lib/validations/CourseValidation";
import toast from "react-hot-toast";
import { useCourseStore } from "@/store/courseStore";
import { dialogClose } from "@/lib/utils";

const AddSubject = ({ refetch }) => {
  // { resolver: yupResolver(createCourseSchema) }
  const methods = useForm({
    resolver: yupResolver(createSubjectSchema),
  });
  const { handleSubmit, watch, formState, reset } = methods;

  const { data: Courses } = useQuery("courses", async () => {
    return useCourseStore.getState().getCourses();
  });

  console.log(formState.errors);
  const { isLoading, mutate } = useMutation(
    async (body) => {
      return await axiosInstance.post("/subject/create", body);
    },
    {
      onSuccess: () => {
        toast.success("Subject Added Sucessfully");
        refetch();
        dialogClose();
        reset();
      },
      onError: (error) => {
        toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
        dialogClose();
        reset();
      },
    }
  );
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

              mutate(formatData);
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
                options={Courses?.courses}
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
                isLoading={isLoading}
                disabled={isLoading}
              />
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default AddSubject;
