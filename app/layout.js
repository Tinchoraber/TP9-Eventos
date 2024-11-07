import "./globals.css";
import {TokenProvider } from "./context/TokenContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TokenProvider>
          {children}
        </TokenProvider>
      </body>
    </html>
  );
}
