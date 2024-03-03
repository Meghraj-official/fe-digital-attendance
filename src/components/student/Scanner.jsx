"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ScannerModal from "./ScannerModal";
import Button from "../common/Button";

const Scanner = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="text-primaryColor-50 py-2 px-2 rounded-xxl text-sm  h-fit md:text-l "
          buttonText="Open Scanner"
        />
      </DialogTrigger>
      <DialogContent
        styleCloseButton="hidden"
        className="  sm:max-w-[425px] h-[480px] md:h-[350px]  px-0 py-0 flex flex-col flex-wrap bg-primaryColor-100"
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
