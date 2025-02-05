import { Geist, Geist_Mono } from "next/font/google";
import Footer from "../components/Footer";
import Navbar from "./components/Navbar";
import "./components/ui/styles.css";
import "./globals.css";
import { Great_Vibes } from "next/font/google";

// Importing elegant cursive font
const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}  
      >
        <Navbar />  
        <main>{children}</main>  
        <Footer />  
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
