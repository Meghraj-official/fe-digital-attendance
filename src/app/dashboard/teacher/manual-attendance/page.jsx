"use client";
import CustomInput from "@/components/dashboard/common/CustomInput";
import RhfSelect from "@/components/reactHookForms/RhfSelect";
import Button from "@/components/common/Button";
import { useForm, FormProvider } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import axiosInstance from "@/lib/axios";
import { FormatAssignSubjects } from "@/lib/helpers/FormatAssignSubjects";
import toast from "react-hot-toast";
import { batchOptions, sectionOptions } from "@/lib/data/signup";
import { manualAttendanceSchema } from "@/lib/validations/ManualAttendanceValidation";
const ManualAttendance = () => {
  const { data: teacherData } = useQuery("currentTeacher", async () => {
    return (await axiosInstance.get("/user/showme")).data;
  });

  const handleManualAttendance = async (formData) => {
    const inputData = { ...formData, rollNo: formData?.rollNo.toString() };
    return await axiosInstance.post("/attendance/manual", inputData);
  };
  const { mutate: markAttendance, isLoading } = useMutation(
    handleManualAttendance,
    {
      onSuccess: () => {
        toast.success("Attendance Marked Sucessfully");
      },
      onError: (error) => {
        toast.error(`${error?.response?.data?.error?.message || "Error"}  `);
      },
    }
  );

  const methods = useForm({
    resolver: yupResolver(manualAttendanceSchema),
  });
  const {
    handleSubmit,

    formState: { isSubmitting, isDirty },
  } = methods;

  return (
    <>
      <div className="flex flex-wrap mt-16  max-w-lg mx-auto ">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => {
              markAttendance(data);
            })}
          >
            <div className="grid grid-cols-2 gap-4  text-left ">
              <RhfSelect
                label="Section"
                placeholder="Select Section"
                name="section"
                options={sectionOptions}
              />
              <RhfSelect
                label="Batch"
                placeholder="Batch"
                name="batch"
                options={batchOptions}
              />
              <CustomInput name="rollNo" id="rollNo" labelName="Roll Number" />
              <RhfSelect
                label="Select Subject"
                placeholder="Subjects"
                name="subjectCode"
                options={FormatAssignSubjects(teacherData?.assignedSubjects)}
              />
            </div>

            <div className="flex justify-center">
              <Button
                isLoading={isLoading}
                buttonText="Mark Attendance"
                disabled={isLoading || !isDirty || isSubmitting}
                type="submit"
                className="sm:w-full py-2 text-white sm:mt-6 mt-3 w-[80%]   "
              />
            </div>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default ManualAttendance;
