import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pie de Boer - Machine Learning Engineer",
  description: "Portfolio of Pie de Boer, Machine Learning Engineer specializing in AI-driven applications, agentic chatbots, and internal banking solutions.",
  keywords: ["Machine Learning", "AI", "Software Engineer", "Berlin", "Next.js", "Python", "FastAPI"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}