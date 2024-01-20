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
        className="sm:max-w-[425px] h-[480px] md:h-[350px]  px-0 py-0 flex flex-col flex-wrap  bg-gray-200"
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
