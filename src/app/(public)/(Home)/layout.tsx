import { NavBar } from '@/components/nav/NavBar';

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
