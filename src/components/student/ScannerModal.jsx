"use client";
import React, { useState } from "react";
import { Html5Qrcode, Html5QrcodeSupportedFormats } from "html5-qrcode";
import { useEffect } from "react";
import { DialogClose } from "../ui/dialog";
import { XIcon } from "lucide-react";
import axiosInstance from "@/lib/axios";
import toast from "react-hot-toast";
import { dialogClose } from "@/lib/utils";

const ScannerModal = () => {
  const [result, setResult] = useState(null);
  const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };
  let html5QrCode;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    html5QrCode = new Html5Qrcode("reader", {
      formatsToSupport: [Html5QrcodeSupportedFormats.QR_CODE],
    });
    handleClickAdvanced();
  }, []);

  useEffect(() => {
    async function handleAttendance() {
      try {
        const res = await axiosInstance.post(`/attendance/scan-qr`, result);
        console.log(res);
        toast.success("Attendance Success", {
          duration: 6000,
          position: "top-center",
        });
      } catch (err) {
        console.log("Error", err);
        toast.error(`${err?.response?.data?.error?.message || "Error"}  `, {
          duration: 6000,
          position: "top-center",
        });
      }
      finally{
        setResult(null)
      }
    }
    if (result !== null) {
      handleAttendance();
    }
  }, [result]);

  const handleClickAdvanced = () => {
    const qrCodeSuccessCallback = async (decodedText) => {
      const cleanedData = decodedText.replace(/["\\]/g, "");

      const formattedBody = {
        qrToken: cleanedData,
      };
      setResult(formattedBody);

      handleStop();
      dialogClose();
    };
    html5QrCode.start(
      { facingMode: "environment" },
      qrConfig,
      qrCodeSuccessCallback
    );
  };

  const handleStop = () => {
    try {
      html5QrCode
        .stop()
        .then(() => {
          html5QrCode.clear();
        })
        .catch((err) => {
          console.log("error stopping camera", err.message);
        });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" h-fit relative  rounded-md flex flex-wrap flex-col">
      <div
        id="reader"
        className="mx-auto absolute  h-[400px] md:h-[350px]  "
        style={{
          position: "absolute",
          top: 30,
          width: "300px",
          flexWrap: "wrap",
          display: "flex",
        }}
      />
      <div className="flex  absolute top-3 right-3 justify-center">
        <DialogClose asChild>
          <button className=" py-1   rounded-full" onClick={() => handleStop()}>
            <XIcon className="h-5 w-5" />
          </button>
        </DialogClose>
      </div>
    </div>
  );
};

export default ScannerModal;
