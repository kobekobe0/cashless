"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import QRScanner from "@/components/qrscanner/QRScanner"; // Import QR Scanner

export default function LandingPage() {
  const [urn, setUrn] = useState("RD004202400000014");
  const [scannedData, setScannedData] = useState(""); // Stores scanned QR data
  const [showScanner, setShowScanner] = useState(false); // Toggles scanner visibility
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightBlue p-6 font-poppins">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl w-full flex flex-col md:flex-row items-center">
        
        {/* Left Section (Image & Info) */}
        <div className="bg-primary text-white p-6 rounded-2xl md:w-1/2 w-full flex flex-col items-center">
          <h2 className="text-primary-title text-center">LRA ONLINE PAYMENT</h2>
          <div className="mt-4 w-40 h-40 bg-gray-300 rounded-lg"></div> 
          <p className="mt-4 text-center text-primary-content">
            Pay your LRA transaction fees securely. For a smooth payment experience, use your preferred e-wallets, debit cards, or credit cards.
          </p>
          <p className="mt-4 text-yellowGold font-semibold text-center text-secondary-content">
            It's fast and simple. Why wait? Pay your LRA transaction online!
          </p>
        </div>

        {/* Right Section (Steps & Input) */}
        <div className="flex flex-col items-center text-center md:w-1/2 w-full p-4">
          
          {/* Step 1 */}
          <h2 className="text-primary-content text-secondary mt-4">Step 1</h2>
          <p className="text-secondary-content text-secondary mt-1">
            Get your Assessment Form and Payment Order (AFPO).
          </p>

          {/* Step 2 */}
          <h2 className="text-primary-content text-secondary mt-6">Step 2</h2>
          <p className="text-secondary-content text-secondary mt-1">
            Locate and scan the QR Code found in the footer section of the first page within the AFPO.
          </p>

          {/* Clickable QR Scanner Placeholder */}
          {!showScanner && (
            <button
              onClick={() => setShowScanner(true)}
              className="mt-4 flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full hover:bg-gray-300 transition"
            >
              <img src="/icons/LARLogo.SVG" alt="Open QR Scanner" className="w-10 h-10" />
            </button>
          )}

          {/* QR Scanner (Appears Immediately on Click) */}
          {showScanner && (
            <div className="mt-4">
              <QRScanner 
                onScan={(data) => { 
                  setScannedData(data);
                  setShowScanner(false); // Close scanner after scanning
                }} 
                closeScanner={() => setShowScanner(false)} // Allows manual closure
              />
            </div>
          )}

          {/* Display Scanned QR Data */}
          {scannedData && (
            <p className="text-green-600 font-semibold mt-2">
              Scanned QR Code: {scannedData}
            </p>
          )}

          {/* URN Input */}
          <p className="text-secondary-content text-secondary mt-4">
            Or input the Unique Reference Number (URN) located in the footer of the first page of AFPO in case the QR Code cannot be read.
          </p>
          
          <input
            type="text"
            value={scannedData || urn} // Show scanned QR code if available
            readOnly
            className="border border-secondary rounded-md px-4 py-2 text-center w-72 mt-2"
          />

          {/* Proceed Button */}
          <button className="bg-yellowGold text-secondary font-bold py-2 px-6 mt-4 rounded-md hover:bg-yellow-500 text-button">
            PROCEED
          </button>

        </div>
      </div>
    </div>
  );
}
