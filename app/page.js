"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Import Next.js Router

export default function Home() {
  const [urn, setUrn] = useState("");
  const router = useRouter(); // Initialize Router

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">

      {/* Card Section */}
      <div className="bg-white shadow-lg rounded-2xl p-6 max-w-lg w-full text-center">
        <h2 className="text-xl font-bold text-blue-900">LRA ONLINE PAYMENT</h2>
        <p className="mt-2 text-gray-600">
          Pay your LRA transaction fees securely. Use your preferred e-wallets,
          debit cards, or credit cards.
        </p>

        {/* Steps */}
        <div className="mt-6 text-left">
          <p className="font-semibold">Step 1:</p>
          <p>Get your Assessment Form and Payment Order (AFPO).</p>

          <p className="mt-4 font-semibold">Step 2:</p>
          <p>Locate and scan the QR Code in the footer section of the AFPO.</p>

          <p className="mt-4">Or input the Unique Reference Number (URN):</p>
          <input
            type="text"
            value={urn}
            onChange={(e) => setUrn(e.target.value)}
            className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            placeholder="Enter URN"
          />
        </div>

        {/* Proceed Button */}
        <button className="w-full mt-6 p-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600">
          PROCEED
        </button>

        {/* New Button - Navigate to SamplePage.js */}
        <button
          onClick={() => router.push("/SamplePages")} // ✅ Now it works!
          className="w-full mt-4 p-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Go to Sample Page
        </button>

      </div>
    </div>
  );
}
