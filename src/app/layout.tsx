import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ASC — A Satanic Church | Roblox Gothic Experience",
  description:
    "An monumental Gothic cathedral and occult sanctuary created in Roblox by kingpaimon2. Explore 164,153 handcrafted architectural instances, the Great Occult Library, interactive tomes, and autonomous entities.",
  keywords: [
    "ASC",
    "A Satanic Church",
    "Roblox Gothic Game",
    "Roblox Cathedral",
    "kingpaimon2",
    "Occult Library",
    "Gothic Architecture Roblox"
  ],
  authors: [{ name: "kingpaimon2" }],
  openGraph: {
    title: "ASC — A Satanic Church",
    description: "Monumental Gothic cathedral, occult library, and liturgical roleplay experience on Roblox.",
    url: "https://www.roblox.com/games/91131584470075/ASC-A-Satanic-Church",
    siteName: "ASC — A Satanic Church",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-sanctum-950 text-sanctum-bone selection:bg-sanctum-crimson selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
