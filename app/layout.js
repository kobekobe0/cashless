import { TanstackProvider } from "@/components/providers/tanstack-provider";
import Image from "next/image";
import "./globals.css";
import Navbar from "@/components/layout/navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <TanstackProvider>
          <Navbar />
          
          {/* Render the actual page content */}
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
