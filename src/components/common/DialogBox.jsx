import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DialogBox = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex  h-12 p-2 rounded-md bg-primaryColor-300 font-medium ">
          Add Manually{" "}
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primaryColor-200">
        <DialogHeader>
          <DialogTitle>Add Manually</DialogTitle>
          <DialogDescription>
            Add student's data manually. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm">
              Name
            </label>
            <input id="name" className="col-span-3 outline-none h-6 text-sm" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="ID" className="text-right text-sm">
              ID
            </label>
            <input id="id" className="col-span-3 h-6 outline-none text-sm " />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right text-sm">
              Email
            </label>
            <input id="email" className="col-span-3 h-6 outline-none text-sm" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="number" className="text-right text-sm">
              Phone Number
            </label>
            <input
              id="number"
              className="col-span-3 h-6 outline-none text-sm"
            />
          </div>
        </div>
        <DialogFooter>
          <button
            type="submit "
            className="bg-primaryColor-800 hover:bg-primaryColor-600 border-1 rounded-md p-2 text-primaryColor-50"
          >
            Save changes
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogBox;
