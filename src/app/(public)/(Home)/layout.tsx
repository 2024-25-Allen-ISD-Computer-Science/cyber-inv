import { NavBar } from '@/components/nav/NavBar';
import { Metadata } from 'next';
export const metadata: Metadata = {
    title: 'Cyber Invitational',
    description: 'Cyber Security Competition for North Texas High school students!',
    openGraph: {
        images: ['~/images/cybinv9.jpg','~/images/cybinv3.jpg','~/images/cybinv4.jpg'],
      },
};
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    
    return (
        <div className="">
            <header className="sticky top-0 z-50">
                <NavBar />
            </header>

            <main>
                {children}
            </main>
        </div>
    );
}
