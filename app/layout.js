import { TanstackProvider } from "@/components/providers/tanstack-provider";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/layout/navbar";
import { ToastContainer } from "@/components/reusables/validation/toast";


export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TanstackProvider>
          <ToastContainer position="bottom-right"/>

          <Navbar />
          {children}

        </TanstackProvider>
      </body>
    </html>
  );
}
