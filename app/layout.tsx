import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import BackgroundEffects from "@/components/BackgroundEffects";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://shivam-backend-dev.vercel.app"),
  title: "Shivam | Backend Developer - Spring Boot & Java Expert",
  description: "1 year hands on experience in building production-ready backend systems with Java, Spring Boot, and Machine Learning. Open to new opportunities in backend development, machine learning and SDE roles.", 
  keywords: ["Full-Stack Java Developer", "Spring Boot", "Backend Engineer", "Machine Learning", "Shivam Portfolio"],
  openGraph: { 
    title: "Shivam | Backend Developer",
    description: "Building scalable and secure backend architectures including Spring Security and OAuth2 integration and Spring AI with ADK (Agent Development Kit)Building Agents and Integrate in our projects and System.",
    url: "https://shivam-backend-dev.vercel.app",
    siteName: "Shivam Dev Portfolio",
    images: [
      {
        url: "/og-image.png", // public folder mein ek preview image rakhein
        width: 1200,
        height: 630,
        alt: "Shivam Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam | Backend Developer",
    description: "Java/Spring Boot expert build production-ready systems.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <BackgroundEffects />
          <SmoothScroll>
            <Navbar />
            <CommandPalette /> {/* <--- Ye yahan hona chahiye */}
            <main className="min-h-screen px-6 md:px-24">
              {children}
            </main>
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}