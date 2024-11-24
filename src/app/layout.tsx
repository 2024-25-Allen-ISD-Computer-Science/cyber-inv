import { Poppins, Inter } from 'next/font/google';
import '@/globals.css';
import ParticlesAni from '@/components/Particles';
const poppins = Poppins({
    variable: '--font-sans',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'], // Adding subset for Poppins if necessary
});

const inter = Inter({
    variable: '--font-sans-alt',
    subsets: ['latin'], // Specify subset to fix preload error
});



export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="h-full">
            <body className={`${poppins.variable} ${inter.variable} h-full font-sans antialiased`}>
                <div className='-z-10 absolute'>
                    <ParticlesAni />
                </div>
                {children}
            </body>
        </html>
    );
}
