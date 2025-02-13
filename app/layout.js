import { TanstackProvider } from "@/components/providers/tanstack-provider";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/layout/navBar";
import { ToastContainer } from "@/components/reusables/validation/toast";


export default function RootLayout({ children }) {
  return (
    <html>
      <body className="pt-[80px]">  {/* Adjust the padding to navbar height */}
        <TanstackProvider>
          <ToastContainer position="bottom-right">
          
          <Navbar />
          {children}
          </ToastContainer>
        </TanstackProvider>
      </body>
    </html>
  );
}

