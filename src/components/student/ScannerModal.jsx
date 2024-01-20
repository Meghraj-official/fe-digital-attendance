"use client";
import React from "react";
import { Html5Qrcode } from "html5-qrcode";
import { useEffect } from "react";

const ScannerModal = () => {
  const qrConfig = { fps: 10, qrbox: { width: 300, height: 300 } };
  let html5QrCode;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    html5QrCode = new Html5Qrcode("reader");
  }, []);

  const handleClickAdvanced = () => {
    const qrCodeSuccessCallback = (decodedText, decodedResult) => {
      console.log("sacnnned text", decodedText, decodedResult);
      handleStop();
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
        .then((res) => {
          console.log("scanner stopped", res);
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
    <div className="h-96 w-96 rounded-md">
      <div id="reader" width="100%" className="w-full h-[80%] rounded-md" />
      <div className="flex justify-center gap-5 py-2">
        <button
          className="px-5 py-1 bg-slate-200  rounded-full "
          onClick={() => handleClickAdvanced()}
        >
          {" "}
          Open Scanner
        </button>
        <button
          className="px-5 py-1  bg-slate-200  rounded-full"
          onClick={() => handleStop()}
        >
          Close Scanner
        </button>
      </div>
    </div>
  );
};

export default ScannerModal;
