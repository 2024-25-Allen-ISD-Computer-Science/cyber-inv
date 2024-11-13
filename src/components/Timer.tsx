"use client";

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const Countdown = dynamic(() => import('react-countdown'), { ssr: false });

export default function Timer() {
    // Define the target date: March 16, 2025
    const targetDate = new Date('2025-03-15T00:00:00');

    const CountdownSection = ({ name, value }: { name: string; value: number }) => (
        <div className="flex flex-col items-center rounded-xl p-4 text-center max-md:basis-1/2 md:min-w-32 md:border">
            <p className="animate-pulse text-7xl font-semibold">{String(value).padStart(2, '0')}</p>
            <p>{name}</p>
        </div>
    );

    return (
        <div>
<<<<<<< HEAD
=======
            <div className="px-8 pb-8 text-center text-5xl font-extrabold text-violet-500">COUNTDOWN TIMER</div>
>>>>>>> refs/remotes/origin/nextjs
            <Countdown
                date={targetDate}
                renderer={({ days, hours, minutes, seconds, completed }) => {
                    if (completed) return <span>The competition will begin shortly.</span>;
                    return (
                        <div className="flex flex-wrap items-center justify-between">
                            <CountdownSection name="Days" value={days} />
                            <CountdownSection name="Hours" value={hours} />
                            <CountdownSection name="Minutes" value={minutes} />
                            <CountdownSection name="Seconds" value={seconds} />
                        </div>
                    );
                }}
            />
        </div>
    );
}
