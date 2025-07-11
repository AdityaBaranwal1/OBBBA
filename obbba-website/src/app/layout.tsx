import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OBBBA Analysis - Understanding the Real Costs",
  description: "A comprehensive analysis of the One Big Beautiful Bill and its far-reaching implications for our economy, society, and future generations.",
  keywords: ["OBBBA", "legislation", "cost analysis", "federal spending", "policy analysis"],
  authors: [{ name: "OBBBA Analysis Team" }],
  openGraph: {
    title: "OBBBA Analysis - Understanding the Real Costs",
    description: "A comprehensive analysis of the One Big Beautiful Bill and its implications",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "OBBBA Analysis - Understanding the Real Costs",
    description: "A comprehensive analysis of the One Big Beautiful Bill and its implications",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
