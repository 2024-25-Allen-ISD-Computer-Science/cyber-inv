import { NavBar } from '@/components/nav/NavBar';
import ParticlesAni from '@/components/Particles';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="">
                                        <div className='-z-10 absolute'>
                                            <ParticlesAni />
                                        </div>
            <NavBar />
            {children}
        </div>
    );
}
