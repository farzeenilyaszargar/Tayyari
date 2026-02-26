import type { Metadata } from "next";
import "./global.css";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tayyari | Crack JEE with AI",
  description: "Get AI-generated test papers, instant ranks, and personalized study materials.",
  keywords: ["jee", "iit", "test", "ai", "study materials"],
  icons: "./favicon.png",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased bg-background text-foreground min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
