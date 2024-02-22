import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zen Sounds",
  description: "Discover the power of great surroundings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Zen Sounds | Relaxing Soundscapes for Focus & Peace</title>
        <meta name="description" content="Immerse yourself in a curated collection of ambient soundscapes. Find tranquility in nature, escape to fictional worlds, and unwind with calming sounds for focus and relaxation." />
        <meta name="keywords" content="zen, soundscapes, nature sounds, ambient music, relaxation, meditation, focus, sleep, calming, fictional sounds, video game sounds" />
        <meta property="og:type" content="Zen Sounds" />
        <meta property="og:title" content="Zen Sounds | Relaxing Soundscapes for Focus & Peace" />
        <meta property="og:description" content="Immerse yourself in a curated collection of ambient soundscapes. Find tranquility in nature, escape to fictional worlds, and unwind with calming sounds for focus and relaxation." />
        <meta property="og:image" content="./zen.png" />
        <meta property="twitter:card" content="Zen Sounds" />
        <meta property="twitter:title" content="Zen Sounds | Relaxing Soundscapes for Focus & Peace" />
        <meta property="twitter:description" content="Immerse yourself in a curated collection of ambient soundscapes. Find tranquility in nature, escape to fictional worlds, and unwind with calming sounds for focus and relaxation." />
        <meta property="twitter:image" content="./zen.png" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
