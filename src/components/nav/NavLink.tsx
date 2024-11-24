'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const smoothScrolling = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({behavior: 'smooth'})
    }
}

export function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
    const pathname = usePathname();
    const active = pathname === href;
    return (
        <button
            onClick={() => smoothScrolling(href)}
            className={cn(
                'm-2 rounded-md p-3 text-xl text-slate-200 transition',
            )}
        >
            {children}
        </button>
    );
}
