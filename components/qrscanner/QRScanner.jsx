"use client";
import { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

export default function QRScanner({ onScan, closeScanner }) {
  const scannerRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const startScanner = async () => {
      try {
        // Prevent duplicate scanners
        if (scannerRef.current || !document.getElementById("qr-reader")) return;

        const html5QrCode = new Html5Qrcode("qr-reader");
        scannerRef.current = html5QrCode;

        const cameras = await Html5Qrcode.getCameras();
        if (cameras.length > 0) {
          await html5QrCode.start(
            cameras[0].id, // Use the first available camera
            { fps: 10, qrbox: { width: 250, height: 250 } },
            (decodedText) => {
              onScan(decodedText);
              html5QrCode.stop().then(() => closeScanner());
            },
            (err) => console.warn("QR Scanner Error:", err)
          );
        } else {
          setError("No cameras found. Please check device permissions.");
        }
      } catch (err) {
        setError("Error accessing camera. Please allow camera permissions.");
        console.error("Camera Access Error:", err);
      }
    };

    // Delay to ensure component is mounted
    setTimeout(startScanner, 100);

    return () => {
      if (scannerRef.current) {
        scannerRef.current.stop().then(() => scannerRef.current.clear());
        scannerRef.current = null;
      }
    };
  }, [onScan, closeScanner]);

  return (
    <div className="flex flex-col items-center">
      <div id="qr-reader" className="w-64 h-64"></div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
}
