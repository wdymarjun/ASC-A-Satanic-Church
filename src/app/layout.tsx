import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASC — A Satanic Church",
  description:
    "Explore ASC — A Satanic Church, a Gothic Roblox experience by kingpaimon2, featuring a monumental cathedral, archive, characters, and surrounding grounds.",
  keywords: [
    "ASC",
    "A Satanic Church",
    "Roblox Gothic Game",
    "Roblox cathedral",
    "kingpaimon2",
    "Gothic architecture",
  ],
  authors: [{ name: "kingpaimon2" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/asc-main-icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/asc-main-icon.png",
  },
  openGraph: {
    title: "ASC — A Satanic Church",
    description:
      "A Gothic Roblox experience of vaulted stone, candlelight, and stories waiting in the archive.",
    siteName: "ASC — A Satanic Church",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
