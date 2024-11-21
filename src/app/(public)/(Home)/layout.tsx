import { NavBar } from '@/components/nav/NavBar';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
<<<<<<< HEAD:src/app/(public)/layout.tsx
        <div className=''>
=======
        <div className="">
>>>>>>> dev:src/app/(public)/(Home)/layout.tsx
            <NavBar />

            {children}
        </div>
    );
}
