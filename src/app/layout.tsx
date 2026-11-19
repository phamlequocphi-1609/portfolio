import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Caveat } from "next/font/google";
import "./globals.css";
import { siteUrl } from "@/constants/site-url";
import { JsonLd } from "@/components/seo/json-ld";
import { ThemeProvider } from "@/context/theme/theme-context";
import { QueryProvider } from "@/context/query";
import { CustomCursor } from "@/components/custom-cursor";

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

export const viewport: Viewport = {
  themeColor: [
    {
      media: "(prefers-color-schema: light)",
      color: "#fffff",
    },
    {
      media: "(prefers-color-schema: dark)",
      color: "#09090b",
    },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Phạm Lê Quốc Phi - Pham Le Quoc Phi | Software Developer Portfolio",
    template: "%s | Pham Le Quoc Phi",
  },
  description:
    "Portfolio of Pham Le Quoc Phi - Software Developer specializing in modern web applications, creative UI/UX, and high-performance solutions.",
  keywords: [
    "Pham Le Quoc Phi",
    "Phạm Lê Quốc Phi",
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
  publisher: "Pham Le Quoc Phi",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: siteUrl,
    title: "Phạm Lê Quốc Phi - Pham Le Quoc Phi | Software Developer Portfolio",
    description:
      "Showcasing high-performance web applications, skills and experience of Pham Le Quoc Phi",
    siteName: "Phạm Lê Quốc Phi - Pham Le Quoc Phi Portfolio",
    images: [
      {
        url: "/og-image-seo.png",
        width: 1200,
        height: 630,
        alt: "Pham Le Quoc Phi Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Phạm Lê Quốc Phi - Pham Le Quoc Phi | Software Developer Portfolio",
    description:
      "Portfolio of Pham Le Quoc Phi - Software Developer specializing in modern web applications, creative UI/UX, and high-performance solutions.",
    images: ["/og-image-seo.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased" suppressHydrationWarning>
        <CustomCursor />
        <QueryProvider>
          <ThemeProvider>
            <JsonLd />
            {children}
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
