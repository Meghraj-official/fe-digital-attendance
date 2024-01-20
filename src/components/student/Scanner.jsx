"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ScannerModal from "./ScannerModal";

const Scanner = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button variant="outline">Open Sanner</button>
      </DialogTrigger>
      <DialogContent
        styleCloseButton="hidden"
        className="sm:max-w-[425px] h-[500px] md:h-[300px]  px-0 py-0 flex flex-col flex-wrap  bg-white"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <div className="w-full  bg-slate-300/10  rounded-md">
          <ScannerModal />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Scanner;
