import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import React from "react";
import Button from "@/components/common/Button";
import { useForm, FormProvider } from "react-hook-form";
import axiosInstance from "@/lib/axios";
import { useMutation, useQuery } from "react-query";
import Spinner from "@/components/common/Spinner";
import toast from "react-hot-toast";
import { dialogClose } from "@/lib/utils";

const AssignSubjectModal = ({ teacherId, assignedSubjects }) => {
  const { data: Subjects, isLoading } = useQuery("getAllSubjects", async () => {
    return (await axiosInstance.get("/subject/list")).data;
  });
  console.log(Subjects);
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { isDirty },
  } = methods;

  const { isLoading: isAssignLoading, mutate: handleAssignSubject } =
    useMutation(async (values) => {
      try {
        const formattedBody = { ...values, teacherId };

        const res = await axiosInstance.post(
          "/admin/assign-subject",
          formattedBody
        );

        toast.success(res?.data?.message);
      } catch (err) {
        toast.error("Something Went Wrong!");
      } finally {
        dialogClose();
      }
    });

  return (
    <div>
      <DialogHeader className="text-lg font-bold">
        Choose subjects to Assign
      </DialogHeader>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleAssignSubject)}>
          <div className=" flex py-5  min-h-[100px] flex-wrap gap-5 ">
            {isLoading ? (
              <Spinner className="border-gray-950 mx-auto " />
            ) : (
              <>
                {" "}
                {Subjects?.subjects.map((subject) => (
                  <div
                    key={subject?._id}
                    className="flex items-center  gap-2 flex-row-reverse"
                  >
                    <label htmlFor={subject?.name} className="uppercase">
                      {subject?.name}
                    </label>
                    <input
                      className="h-5 w-5"
                      defaultChecked={assignedSubjects.some(
                        (item) => item.code === subject?.code
                      )}
                      value={subject?.code}
                      key={subject?._id}
                      type="checkbox"
                      name={subject.name}
                      {...register("subjectCodes")}
                    />
                  </div>
                ))}
              </>
            )}
          </div>
          <DialogFooter className="my-3">
            <Button
              buttonText="Assign"
              type="submit"
              className="w-full py-2 text-white mt-3  "
              disabled={!isDirty || isLoading}
              isLoading={isAssignLoading}
            />
          </DialogFooter>
        </form>
      </FormProvider>
    </div>
  );
};

export default AssignSubjectModal;
