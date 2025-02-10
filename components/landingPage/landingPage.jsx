"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [urn, setUrn] = useState("RD004202400000014");
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-lightBlue p-6 font-poppins">
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-4xl w-full flex flex-col md:flex-row items-center">
        {/* Left Section (Image & Info) */}
        <div className="bg-primary text-white p-6 rounded-2xl md:w-1/2 w-full flex flex-col items-center">
          <h2 className="text-primary-title text-center">LRA ONLINE PAYMENT</h2>
          <div className="mt-4 w-40 h-40 bg-gray-300 rounded-lg"></div> {/* Configurable Image Placeholder */}
          <p className="mt-4 text-center text-primary-content">
            Pay your LRA transaction fees securely. For a smooth payment experience, use your preferred e-wallets, debit cards, or credit cards.
          </p>
          <p className="mt-4 text-yellowGold font-semibold text-center text-secondary-content">
            It's fast and simple. Why wait? Pay your LRA transaction online!
          </p>
        </div>

        {/* Right Section (Steps & Input) */}
        <div className="p-6 md:w-1/2 w-full">
          <p className="font-semibold text-secondary-title">Step 1:</p>
          <p className="text-primary-content">Get your Assessment Form and Payment Order (AFPO).</p>

          <p className="mt-4 font-semibold text-secondary-title">Step 2:</p>
          <p className="text-primary-content">Locate and scan the QR Code found in the footer section of the first page within the AFPO.</p>

          <div className="flex items-center justify-center mt-4">
            <button className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center" onClick={() => alert('Unable to scan the QR code. Please try again or input the Unique Reference Number (URN).')}>📷</button>
          </div>

          <p className="mt-4 text-center text-primary-content">Or input the Unique Reference Number (URN) located in the footer of the first page of AFPO in case the QR Code cannot be read.</p>
          
          <input
            type="text"
            value={urn}
            onChange={(e) => setUrn(e.target.value)}
            className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-center font-semibold"
            maxLength={17}
            pattern="[A-Za-z0-9]{17}"
            title="URN must be 17 alphanumeric characters without special characters"
          />

          <button className="w-full mt-6 p-3 bg-yellowGold text-white font-semibold rounded-lg hover:bg-yellow-600">
            PROCEED
          </button>
        </div>
      </div>
    </div>
  );
}
