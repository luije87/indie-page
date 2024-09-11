import { Space_Grotesk } from "next/font/google";
const font = Space_Grotesk({ subsets: ["latin"] });
import "@/app/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
