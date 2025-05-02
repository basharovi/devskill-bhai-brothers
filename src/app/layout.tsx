import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Skill ভাই ব্রাদার্স - ASP.NET Community",
  description: "A vibrant .NET developer community built on brotherhood and shared growth.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
