import { Geist, Geist_Mono, Raleway } from "next/font/google"; // Combined imports
import "./globals.css";
import Navbar from '@/Components/Navigation';
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Joseph Kalu | Frontend Developer",
  description: "Building Amazing Websites / Web Apps",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}