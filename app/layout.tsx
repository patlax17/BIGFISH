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
  openGraph: {
    title: "Big Fish - Fatimah Basir | Empowering Little Readers",
    description: "An aquatic adventure by NYC educator Fatimah Basir, designed to build resilience and a 'Big Fish' mindset.",
    url: "https://bigfish-book.com", // Placeholder, Vercel will override or we can leave relative
    siteName: "Big Fish - Fatimah Basir",
    images: [
      {
        url: "/book-cover.jpg", // Must be an absolute URL in production usually, but Vercel handles relative often. Safe bet is relative for now.
        width: 1200,
        height: 630,
        alt: "I'm A Big Fish Not A Guppy Book Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Big Fish - Fatimah Basir | Empowering Little Readers",
    description: "An aquatic adventure by NYC educator Fatimah Basir, designed to build resilience and a 'Big Fish' mindset.",
    images: ["/book-cover.jpg"],
  },
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
