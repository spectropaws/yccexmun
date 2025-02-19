import { Analytics } from "@vercel/analytics/react"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
    title: "YCCE X MUN",
    description: "Get ready for YCCE X MUN",
    openGraph: {
        title: "YCCE X MUN",
        description: "Get ready for YCCE X MUN",
        url: "https://yccexmun.in/",
        type: "website",
        images: [
            {
                url: "https://yccexmun.in/images/mun-logo.jpg",
            },
        ],
    },

};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
