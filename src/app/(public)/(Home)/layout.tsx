import { NavBar } from '@/components/nav/NavBar';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>            <NavBar />

            {children}
        </>
    );
}
