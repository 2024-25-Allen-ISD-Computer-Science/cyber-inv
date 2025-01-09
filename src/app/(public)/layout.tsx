import { NavBar } from '@/components/nav/NavBar';
import ParticlesAni from '@/components/Particles';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full h-full flex flex-col">
            <div className='-z-10 absolute'>
                <ParticlesAni />
            </div>
            <NavBar />
            <div className='flex-grow'>

            {children}
            </div>
        </div>
    );
}
