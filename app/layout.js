import { TanstackProvider } from "@/components/providers/tanstack-provider";
import "./globals.css";
export default function RootLayout({ children }) {
  
  return (
    <html>
      <body>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
