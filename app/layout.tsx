import type { Metadata } from "next";
<<<<<<< HEAD
import "./global.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
=======
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
>>>>>>> c260406 (made basic)
  subsets: ["latin"],
});

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Tayyari | Crack JEE with AI",
  description: "Get AI-generated test papers, instant ranks, and personalized study materials.",
  keywords: ["jee", "iit", "test", "ai", "study materials"],
  icons: "./favicon.png",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
=======
  title: "Tayyari - Serious JEE Preparation",
  description: "The ultimate platform for JEE aspirants. Take exams, get rank predictions, analyze weak points, and climb the leaderboard.",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        {children}
>>>>>>> c260406 (made basic)
      </body>
    </html>
  );
}
