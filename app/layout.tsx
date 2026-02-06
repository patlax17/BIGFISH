import type { Metadata } from "next";
import { Montserrat, Quicksand } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Big Fish - Fatimah Basir | Empowering Little Readers",
  description: "An aquatic adventure by NYC educator Fatimah Basir, designed to build resilience and a 'Big Fish' mindset.",
  keywords: ["Fatimah Basir", "Big Fish", "Children's Book", "Growth Mindset", "NYC Educator", "Social Emotional Learning"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${quicksand.variable} antialiased font-body`}
      >
        {children}
      </body>
    </html>
  );
}
