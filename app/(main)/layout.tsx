import "@/app/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcome to Indie Page",
  description: "The fastest way to showcase your projects.",
  keywords: [
    "indie page",
    "build webpage",
    "project shipping",
    "portfolio",
    "website builder",
    "customize webpage",
  ],
  authors: [{ name: "Luije", url: "https://indie-page-ashy.vercel.app/luije" }],
  themeColor: "#ff6600",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  openGraph: {
    type: "website",
    url: "https://indie-page-ashy.vercel.app",
    title: "Welcome to Indie Page",
    description: "The fastest way to showcase your projects.",
    siteName: "Indie Page",
    images: [
      {
        url: "https://indie-page-ashy.vercel.app/android-chrome-512x512.png",
        width: 800,
        height: 600,
        alt: "Indie Page logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@luije87",
    title: "Welcome to Indie Page",
    description: "The fastest way to showcase your projects.",
    images: ["https://yourwebsite.com/images/twitter-image.png"],
  },
  alternates: {
    canonical: "https://indie-page-ashy.vercel.app",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="h-screen">{children}</main>;
}
