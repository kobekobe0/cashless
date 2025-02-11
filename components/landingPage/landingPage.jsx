"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import QRScanner from "@/components/qrscanner/QRScanner";
import PrimaryBtn from "@/components/reusables/buttons/primary";

export default function LandingPage() {
  const [urn, setUrn] = useState("RD004202400000014");
  const [scannedData, setScannedData] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-lightBlue p-6 font-poppins">
      
      {/* Parent container with adjusted overlap */}
      <div className="flex flex-col md:flex-row gap-0 max-w-5xl w-full justify-center items-stretch relative">
        
        {/* Left Panel (LRA Info) */}
        <div className="bg-[#0A1E72] text-white p-8 rounded-2xl w-full md:w-[450px] text-center shadow-lg flex flex-col justify-between relative z-10 -mr-6">
          <h2 className="text-primary-title whitespace-nowrap">LRA ONLINE PAYMENT</h2>
          <div className="mt-6 w-48 h-48 bg-gray-300 rounded-lg mx-auto"></div> 
          <p className="mt-6 text-primary-content">
            Pay your LRA transaction fees securely. For a <br />
            smooth payment experience, use your preferred <br />
            e-wallets, debit cards, or credit cards.
          </p>
          <p className="mt-4 text-yellowGold font-semibold text-primary-content italic">
            It's fast and simple. Why wait? Pay your LRA transaction online!
          </p>
        </div>

        {/* Right Panel (Steps & Input) */}
        <div className="bg-white p-8 rounded-r-2xl w-full md:w-[460px] text-center shadow-lg flex flex-col justify-between relative z-0">
          
          <div>
            <h2 className="text-secondary-title text-secondary">Step 1:</h2>
            <p className="text-secondary-content mt-1">
              Get your Assessment Form and Payment Order (AFPO).
            </p>

            <h2 className="text-secondary-title text-secondary mt-6">Step 2:</h2>
            <p className="text-secondary-content mt-1">
              Locate and scan the QR Code found in the footer section of the first page within the AFPO.
            </p>

            {!showScanner ? (
              <button
                onClick={() => setShowScanner(true)}
                className="mt-4 flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full hover:bg-gray-300 transition mx-auto"
              >
                <img src="/icons/LARLogo.SVG" alt="Open QR Scanner" className="w-12 h-12" />
              </button>
            ) : (
              <div className="mt-4">
                <QRScanner 
                  onScan={(data) => { 
                    setScannedData(data);
                    setShowScanner(false);
                  }} 
                  closeScanner={() => setShowScanner(false)} 
                />
              </div>
            )}

            {scannedData && (
              <p className="text-green-600 font-semibold text-primary-content mt-2">
                Scanned QR Code: {scannedData}
              </p>
            )}

            <p className="text-secondary-content mt-6">
              Or input the Unique Reference Number (URN) located in the footer of the first page of AFPO in case the QR Code cannot be read.
            </p>
            
            <div className="flex justify-center items-center mt-4 border border-secondary rounded-md px-4 py-2 w-72 mx-auto">
              <input
                type="text"
                value={scannedData || urn}
                readOnly
                className="text-center w-full bg-transparent outline-none text-primary-content"
              />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <PrimaryBtn text="PROCEED" onClick={() => console.log("Proceed clicked")} />
          </div>

        </div>
      </div>
    </div>
  );
}
