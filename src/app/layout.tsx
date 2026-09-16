import type { Metadata } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
});

export const metadata: Metadata = {
  title: "Aryan | Software Developer",
  description:
    "Hi, I'm Aryan! A Developer passionate about building cool and innovative applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        geistSans.variable,
        geistMono.variable,
        ubuntu.variable
      )}
    >
      <head>
        <link
          rel="preload"
          as="image"
          href="/bg-image.png"
          fetchPriority="high"
        />
      </head>

      <body className="min-h-full mx-auto bg-black font-[family-name:var(--font-ubuntu)]">
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}