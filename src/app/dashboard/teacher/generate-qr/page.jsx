"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CustomInput from "@/components/dashboard/common/CustomInput";
import Selector from "@/components/common/Selector";
import RhfSelect from "@/components/reactHookForms/RhfSelect";
import { semesterOptions, yearOptions } from "@/lib/data/signup";
import Button from "@/components/common/Button";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import QrCodeModal from "@/components/dashboard/teacher/QrCode";
import { useQuery } from "react-query";
import { useCourseStore } from "@/store/courseStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { qrFormSchema } from "@/lib/validations/CourseValidation";
const GenerateQR = () => {
  const {} = useQuery("courses", async () => {
    return useCourseStore.getState().getCourses();
  });

  const Courses = useCourseStore.getState().courses;
  const [qrText, setQrText] = useState(null);
  const handleGenerateQr = (formData) => {
    const parsedCourseData = JSON.parse(formData.course);
    const formattedBody = {
      ...formData,
      courseName: parsedCourseData.courseName,
    };
    formattedBody.courseType === "YEARLY"
      ? delete formattedBody?.semester
      : delete formattedBody?.year;
    delete formattedBody.course;
    setQrText(formattedBody);
    console.log("QR data", formattedBody);
  };

  const methods = useForm({
    resolver: yupResolver(qrFormSchema),
  });
  const {
    handleSubmit,
    watch,
    // formState: { isDirty },
  } = methods;

  const course = watch("course");
  const courseType = course && JSON.parse(course).courseType;
  const isYearly = courseType === "YEARLY";
  const isSemester = courseType === "SEMESTER";
  return (
    <>
      <div className="flex flex-wrap mt-16  max-w-lg mx-auto">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => {
              handleGenerateQr(data);
              //   console.log("log ", data);
            })}
          >
            <div className="grid grid-cols-2 gap-4  text-left ">
              <Selector
                name="course"
                labelName="Course Code"
                placeholder="Choose course"
                options={Courses && Courses?.courses}
              />

              {(isYearly || isSemester) && (
                <RhfSelect
                  label="Level"
                  placeholder={isYearly ? "Select Year" : "Select Semester"}
                  name={isYearly ? "year" : "semester"}
                  options={isYearly ? yearOptions : semesterOptions}
                />
              )}
              <CustomInput name="section" id="section" labelName="Section" />
              <CustomInput name="batch" id="batch" labelName="Batch" />
              <CustomInput
                name="subjectCode"
                id="subjectCode"
                labelName="Subject Code"
              />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  buttonText="Create Qr Code"
                  type="submit"
                  className="w-full py-2 text-white mt-6   "
                />
              </DialogTrigger>
              {qrText && (
                <DialogContent className="sm:max-w-[425px] flex w-full justify-center h-[500px] items-center bg-primaryColor-200">
                  <QrCodeModal QrData={qrText} />
                </DialogContent>
              )}
            </Dialog>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default GenerateQR;
