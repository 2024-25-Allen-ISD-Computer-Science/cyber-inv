import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HomeBar from "@/components/Navbar/HomeBar"; // Assuming you have this Navbar component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ACI",
  description: "Allen Cyber Invitational",
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
        {/* Navbar */}
        
        <HomeBar />
      

        {/* Content */}
         {/* Adjust padding based on your navbar height */}
          {children}
      
      </body>
    </html>
  );
}
