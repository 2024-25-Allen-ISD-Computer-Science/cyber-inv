import { NavLink } from '@/components/nav/NavLink';
import Image from 'next/image';
import Link from 'next/link';

import ico from '~/images/ico.svg';

export function NavBar() {
    return (
        <nav className="border-b shadow-xl">
            <div className="flex items-center justify-between px-8 text-center">
                <div className="flex items-center justify-center">
                    <Link href="/" className="mr-4">
                        <Image src={ico} width={64} height={64} alt="Eagle Logo" className="size-16 rounded-lg" />
                    </Link>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/#sponsors">Sponsors</NavLink>
                    <NavLink href="/#faq">FAQ</NavLink>
                    <NavLink href="/#meet-the-team">Meet the Team</NavLink>
                    <NavLink href="/#last-year">Last Year</NavLink>
                </div>
                <div className="flex items-center justify-center">
                    <NavLink href="/login">Login</NavLink>
                    <NavLink href="/register">Register</NavLink>
                </div>
            </div>
        </nav>
    );
}
