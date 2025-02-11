"use client";
import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";
import { createPortal } from "react-dom";

export default function QRScanner({ onScan, closeScanner }) {
  const scannerRef = useRef(null);
  const [error, setError] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    const startScanner = async () => {
      try {
        if (scannerRef.current || !document.getElementById("qr-reader")) return;

        const html5QrCode = new Html5Qrcode("qr-reader");
        scannerRef.current = html5QrCode;

        const cameras = await Html5Qrcode.getCameras();
        if (cameras.length > 0) {
          await html5QrCode.start(
            cameras[0].id,
            { fps: 10, qrbox: { width: 250, height: 250 } },
            (decodedText) => {
              onScan(decodedText);
              html5QrCode.stop().then(() => closeScanner());
            },
            (err) => {
              console.warn("QR Scanner Error:", err);
              setError("Unable to scan the QR code. Please try again or input the Unique Reference Number (URN).");
              setShowErrorModal(true);
            }
          );
        } else {
          setError("No cameras found. Please check device permissions.");
          setShowErrorModal(true);
        }
      } catch (err) {
        setError("Error accessing camera. Please allow camera permissions.");
        setShowErrorModal(true);
      }
    };

    setTimeout(startScanner, 100);

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().then(() => scannerRef.current.clear());
        scannerRef.current = null;
      }
    };
  }, [onScan, closeScanner]);

  return (
    <div className="flex flex-col items-center relative">
      <div id="qr-reader" className="w-64 h-64"></div>

      {showErrorModal &&
        createPortal(
          <div
            className="fixed inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-[99999]"
            style={{ position: "fixed" }} // Forces the modal to stay on top
          >
            <div className="bg-white p-6 rounded-lg text-center shadow-lg w-[90%] max-w-md">
              <p className="text-red-500 mb-4">{error}</p>
              <button
                onClick={() => {
                  setShowErrorModal(false);
                  closeScanner();
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
              >
                OK
              </button>
            </div>
          </div>,
          document.body // Mounts the modal at the root level (prevents clipping)
        )}
    </div>
  );
}
