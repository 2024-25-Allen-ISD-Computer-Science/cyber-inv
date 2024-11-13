'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function NavLink({ children, href }: { children: React.ReactNode; href: string }) {
    const pathname = usePathname();
    const active = pathname === href;
    return (
        <Link
            href={href}
            className={cn(
                'm-2 rounded-md bg-background p-3 text-xl text-slate-200 transition hover:bg-primary-foreground',
                {
                    'bg-primary-foreground': active,
                },
            )}
        >
            {children}
        </Link>
    );
}
