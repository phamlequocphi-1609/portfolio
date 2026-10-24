import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/constants/site-url";
import { JsonLd } from "@/components/seo/json-ld";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Pham Le Quoc Phi | Software Developer",
    template: "%s | Pham Le Quoc Phi",
  },
  description:
    "Portfolio of Pham Le Quoc Phi - Software Developer specializing in modern web applications, creative UI/UX, and high-performance solutions.",
  keywords: [
    "Pham Le Quoc Phi",
    "Software Developer",
    "Frontend Developer",
    "Fullstack Developer",
    "Web Developer",
    "React",
    "Node.js",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Pham Le Quoc Phi", url: siteUrl }],
  creator: "Pham Le Quoc Phi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    title: "Pham Le Quoc Phi | Frontend Developer",
    description:
      "Showcasing high-performance web applications, skills and experience of Pham Le Quoc Phi",
    siteName: "Pham Le Quoc Phi Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pham Le Quoc Phi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pham Le Quoc Phi | Frontend Developer",
    description: "Frontend Developer Portfolio",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable}`}
    >
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
