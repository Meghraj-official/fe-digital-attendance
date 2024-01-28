"use client";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import CustomInput from "@/components/dashboard/common/CustomInput";
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
const GenerateQR = () => {

  const { data:teacherData } = useQuery("currentTeacher", async () => {
    return (await axiosInstance.get("/user/showme")).data;
  });

  const [qrText, setQrText] = useState(null);
  const handleGenerateQr =async (formData) => {
    try {
      const res = await axiosInstance.post('/attendance/generate-qr',formData)
      console.log('res', res?.data?.qrToken)
      setQrText(res?.data?.qrToken)
      toast.success('Qr generated')
    }
    catch(err)
    {
      toast.error('Something Went Wrong')
      console.log('Error', err)
    }
   
    console.log("QR data", formData);
  };

  const methods = useForm({
    resolver: yupResolver(qrFormSchema),
  });
  const {
    handleSubmit,

    // formState: { isDirty },
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
            <div className="grid grid-cols-2 gap-4  text-left ">
              <CustomInput name="section" id="section" labelName="Section" />
              <CustomInput name="batch" id="batch" labelName="Batch" />
            
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
                    buttonText="Create Qr Code"
                    type="submit"
                    className="sm:w-full py-2 text-white sm:mt-6 mt-3 w-[80%]   "
                  />
                </div>
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
