"use client";
import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { createPortal } from "react-dom";
import Image from "next/image";
import PrimaryBtn from "@/components/reusables/buttons/primary.jsx";
import Modal from "@/components/reusables/modal/modal.jsx";

export default function QRScanner({ onScan, closeScanner }) {
  const scannerRef = useRef(null);
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isScannerActive, setIsScannerActive] = useState(false);
  const [isScanning, setIsScanning] = useState(false);

  const handleCloseScanner = () => {
    setIsScannerActive(false);
    setIsScanning(false);
    if (scannerRef.current) {
      scannerRef.current.stop().then(() => scannerRef.current.clear());
      scannerRef.current = null;
    }
    setShowOptionsModal(false);
    if (closeScanner) closeScanner();
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setIsUploading(true);
      try {
        const html5QrCode = new Html5Qrcode("qr-reader");
        const result = await html5QrCode.scanFile(file, true);
        onScan(result);
        handleCloseScanner();
      } catch (err) {
        setError("Unable to read the QR code from the image. Please try again.");
        setShowErrorModal(true);
      } finally {
        setIsUploading(false);
      }
    } else {
      handleCloseScanner();
    }
  };

  const handleScanOption = () => {
    setShowOptionsModal(false);
    setIsScannerActive(true);
    setIsScanning(true);
    setTimeout(startScanner, 100);
  };

  const handleUploadOption = () => {
    setShowOptionsModal(false);
    document.getElementById("qr-upload-input").click();
  };

  const startScanner = async () => {
    try {
      if (scannerRef.current || !document.getElementById("qr-reader")) return;
      const html5QrCode = new Html5Qrcode("qr-reader");
      scannerRef.current = html5QrCode;
      const cameras = await Html5Qrcode.getCameras();
      if (cameras.length > 0) {
        await html5QrCode.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: 250 },
          (decodedText) => {
            onScan(decodedText);
            handleCloseScanner();
          }
        );
      } else {
        setError("No cameras found.");
        setShowErrorModal(true);
        handleCloseScanner();
      }
    } catch (err) {
      if (err.message.includes("Permission denied")) {
        handleCloseScanner();
      } else {
        setError("Error accessing camera. Please allow camera permissions.");
        setShowErrorModal(true);
        handleCloseScanner();
      }
    }
  };

  return (
    <div className="mt-4 flex justify-center items-center">
      {!isScannerActive && (
        <button
          onClick={() => setShowOptionsModal(true)}
          className="mt-4 flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          <Image
            src="/icons/larLogo.png"
            alt="QR Scanner"
            width={60}
            height={60}
            className="w-12 h-12"
          />
        </button>
      )}
      <div className={`flex flex-col items-center relative ${!isScannerActive ? "hidden" : ""}`}>
        <div id="qr-reader" className={`w-64 h-64 mb-4 ${!isScannerActive ? "hidden" : ""}`}></div>
        {isScanning && (
          <PrimaryBtn onClick={handleCloseScanner} text="Cancel" />
        )}
        <input
          id="qr-upload-input"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
        {createPortal(
          <Modal
            isOpen={showOptionsModal}
            onClose={handleCloseScanner}
            title="Select QR Code Option"
          >
            <p className="text-secondaryDark mb-4">How would you like to proceed?</p>
            <div className="flex justify-around">
              <PrimaryBtn onClick={handleScanOption} disabled={isUploading} text="Scan" />
              <PrimaryBtn onClick={handleUploadOption} disabled={isUploading} text="Upload QR Code" />
            </div>
          </Modal>,
          document.body
        )}
        {createPortal(
          <Modal
            isOpen={showErrorModal}
            onClose={() => {
              setShowErrorModal(false);
              handleCloseScanner();
            }}
            title="Error"
          >
            <p className="text-secondaryDark mb-4">{error}</p>
          </Modal>,
          document.body
        )}
      </div>
    </div>
  );
}
