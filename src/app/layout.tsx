import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/content/config";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${siteConfig.name} - ${siteConfig.headline}`,
  description: siteConfig.about,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} font-sans scroll-smooth`}>
      <body className="bg-slate-50 text-slate-900 antialiased selection:bg-blue-100 selection:text-blue-900">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 md:px-12 py-12 md:py-20 lg:py-32 flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <footer className="mt-20 pt-8 border-t border-slate-200 text-sm text-slate-500">
            © 2026 {siteConfig.name}. Built with Next.js & Tailwind.
          </footer>
        </div>
      </body>
    </html>
  );
}
