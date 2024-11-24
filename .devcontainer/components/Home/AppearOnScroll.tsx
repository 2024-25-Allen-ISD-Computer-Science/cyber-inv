'use client';
import { useRef } from 'react';
import { useIsVisible } from './isVisible';
import { cn } from '@/lib/utils';

export function AppearOnScroll({
    children,
    duration,
}: {
    children: React.ReactNode;
    duration: 100 | 200 | 300 | 500 | 700 | 1000;
}) {
    const ref = useRef(null);
    const isVisible = useIsVisible(ref);
    return (
        <div
            ref={ref}
            className={cn('opacity-0 transition-opacity ease-in', {
                'opacity-100': isVisible,
                'duration-100': duration === 100,
                'duration-200': duration === 200,
                'duration-300': duration === 300,
                'duration-500': duration === 500,
                'duration-700': duration === 700,
                'duration-1000': duration === 1000,
            })}
        >
            {children}
        </div>
    );
}
