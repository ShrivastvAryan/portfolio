import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Ubuntu } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "./components/Footer/Footer";

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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aryanshrivastava.dev";

export const viewport: Viewport = {
  themeColor: "#141414",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aryan Shrivastava | Full Stack Developer & Software Engineer",
    template: "%s | Aryan Shrivastava",
  },
  description:
    "Portfolio of Aryan Shrivastava — Full Stack Developer specializing in building high-performance web applications, Web3 integrations, Next.js, React, TypeScript, Node.js, and modern software architectures.",
  applicationName: "Aryan Shrivastava Portfolio",
  authors: [{ name: "Aryan Shrivastava", url: siteUrl }],
  generator: "Next.js",
  keywords: [
    "Aryan Shrivastava",
    "Aryan",
    "Software Developer",
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Web3 Developer",
    "Python Developer",
    "Portfolio",
    "Delhi Developer",
    "DashX",
    "GeekRoom",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Aryan Shrivastava",
  publisher: "Aryan Shrivastava",
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aryan Shrivastava | Full Stack Developer & Software Engineer",
    description:
      "Explore the portfolio of Aryan Shrivastava, featuring full-stack applications, Web3 systems, technical stacks, and modern web experiences.",
    url: siteUrl,
    siteName: "Aryan Shrivastava Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Shrivastava | Full Stack Developer & Software Engineer",
    description:
      "Explore the portfolio of Aryan Shrivastava, featuring full-stack applications, Web3 systems, technical stacks, and modern web experiences.",
    creator: "@AryanShrivastav",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Aryan Shrivastava",
      url: siteUrl,
      image: `${siteUrl}/pfp.jpeg`,
      jobTitle: "Full Stack Developer",
      worksFor: {
        "@type": "Organization",
        name: "DashX",
        url: "https://dashx.xyz/",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Guru Gobind Singh Indraprastha University",
      },
      sameAs: [
        "https://github.com/ShrivastvAryan",
        "https://www.linkedin.com/in/aryanshrivastava290605/",
        "https://leetcode.com/u/ShrivastvAryan/",
      ],
      knowsAbout: [
        "Full Stack Web Development",
        "Next.js",
        "React",
        "TypeScript",
        "JavaScript",
        "Python",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Supabase",
        "GraphQL",
        "Docker",
        "Web3",
        "Tailwind CSS",
        "REST APIs",
      ],
      email: "me@aryanshrivastava.dev",
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Aryan Shrivastava Portfolio",
      description:
        "Personal portfolio of Aryan Shrivastava showcasing software engineering projects, tech stack, and development experience.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Aryan Shrivastava - Full Stack Developer",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, ubuntu.variable)}
    >
      <body className="min-h-full mx-auto max-w-[1700px] font-[family-name:var(--font-ubuntu)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}