import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const OtpModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="flex  h-12 p-2 rounded-md bg-primaryColor-300 font-medium ">
          Verify OTP
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-primaryColor-200">
        <DialogHeader>
          <DialogTitle>OTP Verification</DialogTitle>
          <DialogDescription>Enter OTP</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm">
              Enter Otp
            </label>
            <input id="name" className="col-span-3 text-sm h-6 outline-none" />
          </div>
        </div>
        <DialogFooter>
          <button
            type="submit "
            className="bg-primaryColor-800 hover:bg-primaryColor-600 border-1 rounded-md p-2 text-primaryColor-50"
          >
            Verify
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default OtpModal;
