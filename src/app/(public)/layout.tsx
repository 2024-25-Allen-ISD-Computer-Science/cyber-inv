import { NavBar } from '@/components/nav/NavBar';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full flex flex-col">

     
            <div className='flex-grow'>

            {children}
            </div>
        </div>
    );
}
