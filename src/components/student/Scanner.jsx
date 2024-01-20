"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import ScannerModal from "./ScannerModal";
// import Html5QrcodePlugin from "./Html5QrcodePlugin";
// import { useState } from "react";

const Scanner = () => {
  // const [decodedResults, setDecodedResults] = useState([]);
  // const onNewScanResult = (decodedText, decodedResult) => {
  //   console.log("App [result]", decodedText);
  //   alert("result", decodedResults);
  //   setDecodedResults((prev) => [...prev, decodedResult]);
  // };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button variant="outline">Open Sanner</button>
      </DialogTrigger>
      <DialogContent
        styleCloseButton="hidden"
        className="sm:max-w-[425px] flex flex-col flex-wrap  bg-white"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {/* <Html5QrcodePlugin
          fps={10}
          qrbox={250}
          disableFlip={false}
          qrCodeSuccessCallback={onNewScanResult}
        /> */}

        <div className="w-full  bg-slate-300/10  rounded-md">
          <ScannerModal />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Scanner;
