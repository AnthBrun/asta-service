import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AStA Service",
  description: "AStA Service App",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            
      <header>
                <Image 
          src="/asta-tu-dortmund-mathetower-cut-1920.jpg" 
          alt="AStA Logo" 
          width={1920} 
          height={1080} 
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '100%'
          }}
        />
      </header>
      
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
