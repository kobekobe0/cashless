"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QRScanner from "@/components/qrscanner/QRScanner";
import PrimaryBtn from "@/components/reusables/buttons/primary";
import Card from "@/components/reusables/cardContainer/card";
import Container from "@/components/reusables/cardContainer/container";

export default function LandingPage() {
  const [urn, setUrn] = useState("RD004202400000014");
  const [scannedData, setScannedData] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const router = useRouter();

  return (
    <Container variant="outerContainer">
      <Container className="grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full relative">
        
        {/* Left Panel (LRA Info) with dark background */}
        <Card  className="p-8 rounded-2xl w-full flex flex-col justify-between relative z-10 bg-primaryDark text-white text-center">
          <Card  className="w-[calc(100%+4rem)] -ml-8 -mr-8 p-6 rounded-lg shadow-lg bg-gradient-to-b from-deepBlue to-primaryDark text-white text-center">
            <h2 className="text-xl font-bold">LRA ONLINE PAYMENT</h2>
          </Card>
          
          <Container className="mt-6 w-[350px] h-[300px] rounded-lg mx-auto flex items-center justify-center overflow-hidden">
            <Image src="/icons/ePayIconNoBg.SVG" alt="EPay Icon" layout="intrinsic" width={300} height={300} objectFit="cover" priority className="w-full h-full" />
          </Container>



          <p className="mt-6 text-primary-content">
            Pay your LRA transaction fees securely. For a <br />
            smooth payment experience, use your preferred <br />
            e-wallets, debit cards, or credit cards.
          </p>
          <p className="mt-4 text-yellowAccent font-semibold italic">
            It's fast and simple. Why wait? Pay your LRA transaction online!
          </p>
        </Card>

        {/* Right Panel (Steps & Input) remains white */}
        <Card className="rounded-r-2xl w-full flex flex-col justify-between relative z-0">
          <Card className="shadow-none">
            <h2 className="text-secondary-title text-secondary font-bold">
              Step 1:
            </h2>
            <p className="text-secondary-content mt-1">
              Get your Assessment Form and Payment Order (AFPO).
            </p>

            <h2 className="text-secondary-title text-secondary mt-6 font-bold">
              Step 2:
            </h2>
            <p className="text-secondary-content mt-1">
              Locate and scan the QR Code found in the footer section of the first
              page within the AFPO.
            </p>

            {!showScanner ? (
              <button
                onClick={() => setShowScanner(true)}
                className="mt-4 flex items-center justify-center w-20 h-20 bg-gray-200 rounded-full hover:bg-gray-300 transition mx-auto"
              >
                <Image
                  src="/icons/qrCodeScanner.SVG"
                  alt="QR Code Scanner"
                  width={60}
                  height={60}
                  className="w-12 h-12"
                />
              </button>
            ) : (
              <Card className="mt-4">
                <QRScanner
                  onScan={(data) => {
                    setScannedData(data);
                    setShowScanner(false);
                  }}
                  closeScanner={() => setShowScanner(false)}
                />
              </Card>
            )}

            {scannedData && (
              <p className="text-green-600 font-semibold text-primary-content mt-2">
                Scanned QR Code: {scannedData}
              </p>
            )}

            <p className="text-secondary-content mt-6">
              Or input the Unique Reference Number (URN) located in the footer of
              the first page of AFPO in case the QR Code cannot be read.
            </p>

            <Card className="flex justify-center items-center mt-4 border border-secondary rounded-md px-4 py-2 w-72 mx-auto shadow-none">
              <input
                type="text"
                value={scannedData || urn}
                readOnly
                className="text-center w-full bg-transparent outline-none text-primary-content"
              />
            </Card>
          </Card>

          <Card className="mt-6 flex justify-center shadow-none">
            <PrimaryBtn
              text="PROCEED"
              onClick={() => console.log("Proceed clicked")}
            />
          </Card>
        </Card>
      </Container>
    </Container>
  );
}
