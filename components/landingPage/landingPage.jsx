"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import QRScanner from "@/components/qrscanner/QRScanner";
import PrimaryBtn from "@/components/reusables/buttons/primary";
import Card from "@/components/reusables/cardContainer/card";
import Container from "@/components/reusables/cardContainer/container";
import landingPageConfig from "@/config/landingPage/landingPageConfig";
import imageLoader from "@/lib/imageLoader";
import Modal from "@/components/reusables/modal/modal";
import { useGetUrnDetails } from "@/store/urn/urn.repository";

export default function LandingPage() {
  const [urn, setUrn] = useState("");
  const [scannedData, setScannedData] = useState("");
  const [showScanner, setShowScanner] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();

  // Using useMutation correctly
  const { mutate, isLoading, error, data } = useGetUrnDetails();

  const handleInputChange = (e) => {
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    setUrn(value);
  };

  const handleProceed = () => {
    const referenceNumber = scannedData || urn;
    if (!referenceNumber || referenceNumber.length !== 17) {
      console.error("Invalid URN format");
      return;
    }

    mutate(referenceNumber, {
      onSuccess: (data) => {
        console.log("API Response:", data);
      },
      onError: (error) => {
        console.error("API Error:", error);
      },
    });
  };

  return (
    <Container variant="outerContainer">
      <Container className="grid grid-cols-1 md:grid-cols-2 max-w-5xl w-full relative">
        <Card className="p-8 rounded-2xl w-full flex flex-col justify-between relative z-10 bg-primaryDark text-white text-center">
          <Card className="w-[calc(100%+4rem)] -ml-8 -mr-8 p-6 rounded-lg shadow-lg bg-gradient-to-b from-deepBlue to-primaryDark text-white text-center">
            <h2 className="text-xl font-bold">LRA ONLINE PAYMENT</h2>
          </Card>
          <Container className="mt-6 w-[350px] h-[300px] rounded-lg mx-auto flex items-center justify-center overflow-hidden relative">
            <Image 
              src={landingPageConfig.logos.left.src} 
              alt={landingPageConfig.logos.left.alt} 
              loader={imageLoader} 
              className={landingPageConfig.logos.left.className}
              unoptimized 
              fill
            />
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
            <QRScanner
  onScan={(data) => setScannedData(data)}
  closeScanner={() => setShowScanner(false)}
/>
{scannedData && (
  <p className="text-green-600 font-semibold text-primary-content mt-2">
    Scanned QR Code: {scannedData}
  </p>
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
                value={urn}
                onChange={handleInputChange}
                className="text-center w-full bg-transparent outline-none text-primary-content"
                placeholder="Enter URN"
              />
            </Card>
          </Card>
          <Card className="mt-6 flex justify-center shadow-none">
            <PrimaryBtn text="PROCEED" onClick={handleProceed} />
          </Card>
        </Card>
      </Container>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Important Notice"
        footer={
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            OK
          </button>
        }
      >
        <p>Please ensure you have not made any payment through another channel before proceeding with your transaction.</p>
        <p>Thank you!</p>
        <Container className="pt-[10px]">
          <PrimaryBtn text="PROCEED" onClick={() => setIsModalOpen(false)} />
        </Container>
      </Modal>
    </Container>
  );
}
