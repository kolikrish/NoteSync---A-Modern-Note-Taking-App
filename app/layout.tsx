import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/layout/Navbar'
import NextTopLoader from 'nextjs-toploader';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NoteSync",
  description: "Capture your ideas, anytime, anywhere.",
  keywords: ["NoteSync", "note-taking app", "online notes", "cloud notes", "secure notes", "productivity"],
  authors: [{ name: "krish koli", url: "https://interactive-portfolio-gold.vercel.app/" }],
  creator: "Krish koli",
  openGraph: {
    title: "NoteSync - Capture Your Ideas, Anytime, Anywhere",
    description: "A cloud-based note-taking app that helps you organize and access your notes securely from anywhere.",
    url: "",
    siteName: "NoteSync",
    images: [
      {
        // url: "https://notesync-site.netlify.app/images/ogimage.png",
        url: "https://interactive-portfolio-gold.vercel.app/images/ogimage.png",
        width: 1200,
        height: 630,
        alt: "NoteSync - Capture Your Ideas, Anytime, Anywhere",
      },
    ],
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader  color="#9333ea" showSpinner={false}/>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
