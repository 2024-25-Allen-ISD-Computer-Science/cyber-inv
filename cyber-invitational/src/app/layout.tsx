import type { Metadata } from 'next';
import { Poppins, Inter } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
    variable: '--font-sans',
    weight: ['100', '400', '700'],
});
const inter = Inter({
    variable: '--font-sans-alt',
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${inter.variable} antialiased font-sans`}>{children}</body>
        </html>
    );
}
