import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";
import { SkipLink } from "@/components/layout/skip-link";
import { SITE_CONFIG } from "@/lib/constants";
import "@/styles/globals.css";

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

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title} Portfolio`,
  description:
    "Portfolio of Tran Nguyen Vu Phong, a full-stack developer building Web Applications.",
  keywords: [
    "Tran Nguyen Vu Phong",
    "full-stack developer",
    "portfolio",
    "React",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "internship",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  openGraph: {
    title: `${SITE_CONFIG.name} | ${SITE_CONFIG.title}`,
    description:
      "Full-stack developer focused on React interfaces, RESTful APIs, authentication, and music streaming web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} min-h-screen antialiased`}
      >
        <SkipLink />
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
