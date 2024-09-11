import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hi! Welcome to Indie Page",
  description: "The fastest way to ship your projects",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="h-screen">{children}</main>;
}
