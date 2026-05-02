import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer/Footer";
import { Ubuntu } from "next/font/google";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aryan | Software Developer",
  description: "Hi, I'm Aryan! A Developer passionate about building cool and innovative applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans",  ubuntu.variable)}
    >
      <body className="min-h-full mx-auto max-w-[1700px] font-[family-name:var(--font-ubuntu)]">
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer/>
      </body>

    </html>
  );
}