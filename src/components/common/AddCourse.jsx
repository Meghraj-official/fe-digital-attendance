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

const AddCourse = () => {
  const { mutate } = useMutation(async (body) => {
    return await axiosInstance.post("/course/create", body);
  });
  const methods = useForm();
  const { register, handleSubmit } = methods;

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
          {/* <DialogDescription>
              Add student's data manually. Click save when you're done.
            </DialogDescription> */}
        </DialogHeader>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit((data) => {
              console.log("hello", data);
              mutate(data);
            })}
          >
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right text-sm">
                  Course Name
                </label>
                <input
                  {...register("name")}
                  id="name"
                  className="col-span-3 outline-none h-6 text-sm"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="id" className="text-right text-sm">
                  Course Code
                </label>
                <input
                  {...register("code")}
                  id="id"
                  className="col-span-3 h-6 outline-none text-sm "
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
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

            <DialogFooter>
              <button
                type="submit "
                className="bg-primaryColor-800 hover:bg-primaryColor-600 border-1 rounded-md p-2 text-primaryColor-50"
              >
                Add
              </button>
            </DialogFooter>
          </form>
        </FormProvider>
      </DialogContent>
    </Dialog>
  );
};

export default AddCourse;
