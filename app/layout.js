import { Inter } from "next/font/google";
import "./globals.css";
import {TokenProvider } from "./context/TokenContext";
import Footer from "./components/footer";
import Header from "./components/header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TokenProvider>
          {children}
        </TokenProvider>
      </body>
    </html>
  );
}
