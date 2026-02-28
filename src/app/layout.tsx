import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollRevealProvider from "@/components/ScrollRevealProvider";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "King Obioma | Full-Stack, Mobile & UI/UX Developer",
  description: "Portfolio of King Obioma — Full-Stack Developer, Mobile App Developer & UI/UX Designer with 4+ years and 50+ products shipped.",
  keywords: ["Full-Stack Developer", "Mobile App Developer", "UI/UX Designer", "Web Developer", "React", "Next.js", "Laravel", "Vue.js", "TypeScript", "Portfolio"],
  authors: [{ name: "King Obioma" }],
  openGraph: {
    title: "King Obioma | Full-Stack, Mobile & UI/UX Developer",
    description: "Portfolio of King Obioma — Full-Stack Developer, Mobile App Developer & UI/UX Designer with 4+ years and 50+ products shipped.",
    url: "https://kingObioma.vercel.app",
    siteName: "King Obioma Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "King Obioma | Full-Stack, Mobile & UI/UX Developer",
    description: "Portfolio of King Obioma — Full-Stack Developer, Mobile App Developer & UI/UX Designer with 4+ years and 50+ products shipped.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>
          <ScrollRevealProvider />
          <Header />
          <main className="flex-1 pt-24">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
