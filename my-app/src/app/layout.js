import "./globals.css";
import { Inter } from "next/font/google";
import HomePage from "./page";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rywyn",
  description: "Landing Page for Rywyn Resistance Bands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}
      <body className="bg-slate-900 text-white">{children}</body>
      {/* <HomePage /> */}
    </html>
  );
}
