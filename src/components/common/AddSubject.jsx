import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import axiosInstance from "@/lib/axios";
import { useMutation } from "react-query";

const AddSubject = () => {
  const { mutate } = useMutation(async (body) => {
    return await axiosInstance.post("/subject/create", body);
  });

  const { register, handleSubmit } = useForm();
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
          {/* <DialogDescription>
            Add student's data manually. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <form
          onSubmit={handleSubmit((data) => {
            console.log("hiiii", data);
            mutate(data);
          })}
        >
          {" "}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="name" className="text-right text-sm">
                Subject Name
              </label>
              <input
                {...register("name")}
                id="name"
                className="col-span-3 outline-none h-6 text-sm"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="ID" className="text-right text-sm">
                Subject Code
              </label>
              <input
                {...register("code")}
                id="id"
                className="col-span-3 h-6 outline-none text-sm "
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
      </DialogContent>
    </Dialog>
  );
};

export default AddSubject;
