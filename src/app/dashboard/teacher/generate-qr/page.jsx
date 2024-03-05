"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import RhfSelect from "@/components/reactHookForms/RhfSelect";
import Button from "@/components/common/Button";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import QrCodeModal from "@/components/dashboard/teacher/QrCode";
import { useQuery } from "react-query";
import { yupResolver } from "@hookform/resolvers/yup";
import { qrFormSchema } from "@/lib/validations/CourseValidation";
import axiosInstance from "@/lib/axios";
import { FormatAssignSubjects } from "@/lib/helpers/FormatAssignSubjects";
import toast from "react-hot-toast";
import startTimer from "@/lib/helpers/Timer";
import { dialogClose } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { batchOptions, sectionOptions } from "@/lib/data/signup";
const GenerateQR = () => {
  const { data: teacherData } = useQuery("currentTeacher", async () => {
    return (await axiosInstance.get("/user/showme")).data;
  });

  const [qrText, setQrText] = useState(null);
  const router = useRouter();
  const handleGenerateQr = async (formData) => {
    try {
      const res = await axiosInstance.post("/attendance/generate-qr", formData);
      console.log("res", res?.data?.qrToken);
      setQrText(res?.data?.qrToken);
      toast.success("Qr generated");
      setTimeout(() => {
        toast.success("It will be closed automatically after 1 minute.");
      }, 2000);
    } catch (err) {
      toast.error("Something Went Wrong");
      console.log("Error", err);
    }
  };

  const methods = useForm({
    resolver: yupResolver(qrFormSchema),
  });
  const {
    handleSubmit,

    formState: { isSubmitting },
  } = methods;

  return (
    <>
      <div className="flex flex-wrap mt-16  max-w-lg mx-auto ">
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => {
              handleGenerateQr(data);
              //   console.log("log ", data);
            })}
          >
            <div className="flex flex-col min-w-[300px] gap-3 text-left ">
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

              <RhfSelect
                label="Select Subject"
                placeholder="Subjects"
                name="subjectCode"
                options={FormatAssignSubjects(teacherData?.assignedSubjects)}
              />
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <div className="flex justify-center">
                  <Button
                    onClick={() => {
                      startTimer(60, (remainingTime) => {
                        if (remainingTime === 0) {
                          toast.success("Time up");
                          // router.push("/dashboard/teacher/attendance-list");
                          dialogClose();
                        }
                      });
                    }}
                    buttonText="Create Qr Code"
                    disabled={isSubmitting}
                    type="submit"
                    className="sm:w-full py-2 text-white sm:mt-6 mt-3 w-[80%]   "
                  />
                </div>
              </DialogTrigger>
              {qrText && (
                <DialogContent
                  styleCloseButton="hidden"
                  className="sm:max-w-[425px] flex w-full justify-center h-[500px] items-center bg-primaryColor-200"
                  onInteractOutside={(e) => {
                    e.preventDefault();
                  }}
                >
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
