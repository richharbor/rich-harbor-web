import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import type { Metadata } from "next";
import Script from "next/script"; // 👈 important
import Footer from "../components/Common/Footer/Footer";
import Navbar from "@/components/Common/Navbar/Navbar";
import Whatsapp from "@/components/Common/Whatsapp/Whatsapp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rich Harbor",
  description: "Your Harbor for Financial Growth",
  verification: {
    google: "PvrpLhAVJG58lfDd71fEKcjSRyXLZFvXNogrNK2lYcc",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-S23L52FW0T"
          strategy="afterInteractive"
          async
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S23L52FW0T');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        <div className="mx-auto items-center max-md:px-4 flex flex-col relative">
          {children}
          <div className="fixed bottom-4 right-4 z-10">
            <Whatsapp />
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
