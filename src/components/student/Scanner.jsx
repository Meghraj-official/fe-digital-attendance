"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import Html5QrcodePlugin from "./Html5QrcodePlugin";

const Scanner = () => {
  const [decodedResults, setDecodedResults] = useState([]);
  const onNewScanResult = (decodedText, decodedResult) => {
    console.log("App [result]", decodedResult);
    setDecodedResults((prev) => [...prev, decodedResult]);
  };
  console.log("decoded", decodedResults);
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button variant="outline">Open Sanner</button>
        </DialogTrigger>
        <DialogContent
          className="sm:max-w-[425px] bg-white"
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
          <Html5QrcodePlugin
            fps={10}
            qrbox={250}
            disableFlip={false}
            qrCodeSuccessCallback={onNewScanResult}
          />

          <DialogFooter>
            <button> button </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Scanner;
