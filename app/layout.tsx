import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../components/NavBar";
import Loader from "../components/Loader";
import { ThemeProvider } from "next-themes";


const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Less³",
  description: "Group Journey Site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {/* Loader animation */}
          <Loader />

          {/* Navbar with logo */}
          <NavBar />

          {/* Main content */}
          <main className="pt-16">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
