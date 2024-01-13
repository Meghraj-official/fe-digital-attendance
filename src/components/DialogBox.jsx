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
    // <Dialog>
    //   <DialogTrigger>
    //
    //   </DialogTrigger>
    //   <DialogContent className="bg-gray-200">
    //     <DialogHeader>
    //       <DialogTitle>Add Students Manually</DialogTitle>
    //       <DialogDescription>
    //         This action cannot be undone. This will permanently delete your
    //         account and remove your data from our servers.
    //       </DialogDescription>
    //     </DialogHeader>
    //   </DialogContent>
    // </Dialog>
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex  h-12 p-2 rounded-md bg-primaryColor-200 font-medium ">
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
            <label htmlFor="name" className="text-right">
              Name
            </label>
            <input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="ID" className="text-right">
              ID
            </label>
            <input id="id" value="" className="col-span-3 " />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right">
              Email
            </label>
            <input id="email" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="number" className="text-right">
              Phone Number
            </label>
            <input id="number" value="" className="col-span-3" />
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
