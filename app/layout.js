import { Inter } from "next/font/google";
import "./globals.css";
import {TokenProvider } from "./context/TokenContext";
import Footer from "./components/footer";
import Header from "./components/header";
import { ProtectedRoutes } from "./components/protectedRoutes/protectedRoutes";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TokenProvider>
          <ProtectedRoutes>
          {children}
          </ProtectedRoutes>
        </TokenProvider>
      </body>
    </html>
  );
}
