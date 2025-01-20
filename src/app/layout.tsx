import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import '@/globals.css';
import { ThemeProvider } from "@/components/theme-provider"
const poppins = Poppins({
    variable: '--font-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'], // Adding subset for Poppins if necessary
});

const inter = Inter({
    variable: '--font-sans-alt',
    subsets: ['latin'], // Specify subset to fix preload error
});

export const metadata: Metadata = {
    title: 'Cyber Invitational',
    description: 'Cyber Security Competition for North Texas High school students!',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" >
            <body className={`${poppins.variable} ${inter.variable} h-full font-sans antialiased`}>

 

                {children}
            </body>
        </html>
    );
}
