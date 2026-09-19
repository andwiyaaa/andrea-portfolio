import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AmbientField from "@/components/ambient-field";
import SiteExperience from "@/components/site-experience";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Andrea I. Ducosin | Data · Systems · Cloud",
  description:
    "Personal portfolio of Andrea I. Ducosin — data analytics, data engineering, AWS, and IT systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Scroll reveals start hidden and are shown by an observer. If JS
            never runs, this makes sure no content stays invisible. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>

        <AmbientField />
        <SiteExperience>{children}</SiteExperience>
      </body>
    </html>
  );
}