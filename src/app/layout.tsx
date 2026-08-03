import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/constants/portfolioData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1C1D21",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${PERSONAL_INFO.name} | Staff AI & Systems Engineer`,
  description: PERSONAL_INFO.bio,
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "LLM Architect",
    "Deep Learning",
    "Python Developer",
    "vLLM",
    "RAG Infrastructure",
    "Vector Search",
    "San Francisco AI Engineer",
  ],
  authors: [{ name: PERSONAL_INFO.name, url: PERSONAL_INFO.github }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexander-vance-ai.vercel.app",
    title: `${PERSONAL_INFO.name} | Staff AI & Systems Engineer`,
    description: PERSONAL_INFO.bio,
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: PERSONAL_INFO.avatar || "/profile.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} Portfolio Cover`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} | Staff AI & Systems Engineer`,
    description: PERSONAL_INFO.bio,
    images: [PERSONAL_INFO.avatar || "/profile.jpg"],
  },
};

import { ThemeProvider } from "@/context/ThemeContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: PERSONAL_INFO.name,
    jobTitle: PERSONAL_INFO.title,
    description: PERSONAL_INFO.bio,
    url: "https://alexander-vance-ai.vercel.app",
    sameAs: [
      PERSONAL_INFO.github,
      PERSONAL_INFO.linkedin,
      PERSONAL_INFO.leetcode,
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "Machine Learning",
      "Large Language Models",
      "PyTorch",
      "Vector Databases",
      "Distributed Systems",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#1C1D21] text-[#F1E3E4] antialiased min-h-screen relative selection:bg-[#A288A6]/30 selection:text-[#F1E3E4]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
