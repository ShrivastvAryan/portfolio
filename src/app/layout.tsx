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
  metadataBase: new URL("https://aryanshrivastava.dev"),
  title: {
    default: "Aryan Shrivastava | Software Developer",
    template: "%s | Aryan Shrivastava",
  },
  description:
    "Aryan Shrivastava is a software developer building fast, thoughtful web and app experiences with Next.js, TypeScript, and modern full-stack technologies.",
  keywords: [
    "Aryan Shrivastava",
    "software developer",
    "full stack developer",
    "Next.js developer",
    "TypeScript developer",
    "web developer",
  ],
  authors: [{ name: "Aryan Shrivastava", url: "https://aryanshrivastava.dev" }],
  creator: "Aryan Shrivastava",
  publisher: "Aryan Shrivastava",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Aryan Shrivastava",
    title: "Aryan Shrivastava | Software Developer",
    description:
      "Software developer building fast, thoughtful web and app experiences with modern full-stack technologies.",
    images: [
      {
        url: "/opengraph-image.png",
        alt: "Aryan Shrivastava, Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Shrivastava | Software Developer",
    description:
      "Software developer building fast, thoughtful web and app experiences with modern full-stack technologies.",
    images: ["/opengraph-image.png"],
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Aryan Shrivastava",
              url: "https://aryanshrivastava.dev",
              email: "mailto:me@aryanshrivastava.dev",
              jobTitle: "Software Developer",
              sameAs: [
                "https://github.com/ShrivastvAryan",
                "https://www.linkedin.com/in/aryanshrivastava290605/",
                "https://x.com/ShrivastvAryan",
                "https://leetcode.com/u/ShrivastvAryan/",
              ],
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "Guru Gobind Singh Indraprastha University",
              },
              knowsAbout: [
                "Next.js",
                "TypeScript",
                "React",
                "Full-stack development",
                "Web3",
              ],
            }),
          }}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
