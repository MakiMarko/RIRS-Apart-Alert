import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";       // ⬅️ Dodano
import Nav from "./components/Nav";        // ⬅️ Dodano

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Apart Alert",
  description: "Agilni projekt za RIRS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <Providers>
          <Nav />         {/* ⬅️ Prikaz navigacije z login/logout */}
          {children}
        </Providers>
      </body>
    </html>
  );
}
