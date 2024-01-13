import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const QRBox = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex  h-12 p-2 rounded-md bg-primaryColor-300 font-medium ">
          Generate QR
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primaryColor-200">
        <DialogHeader>
          <DialogTitle>Generate QR</DialogTitle>
          <DialogDescription>Add your name and course name</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm">
              Name
            </label>
            <input id="name" className="col-span-3 text-sm h-6 outline-none" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="course" className="text-right  text-sm">
              Course Name
            </label>
            <input
              id="course"
              className="col-span-3 text-sm outline-none h-6 "
            />
          </div>
        </div>
        <DialogFooter>
          <button
            type="submit "
            className="bg-primaryColor-800 hover:bg-primaryColor-600 border-1 rounded-md p-2 text-primaryColor-50"
          >
            Get QR
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default QRBox;
