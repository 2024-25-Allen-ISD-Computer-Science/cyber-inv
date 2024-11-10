'use client';
import Countdown from 'react-countdown';

export default function Timer() {
    // Define the target date: March 16, 2025
    const targetDate = new Date('2025-03-15T00:00:00');

    const CountdownSection = ({ name, value }: { name: string; value: number }) => (
        <div className="flex flex-col items-center text-center md:min-w-32 max-md:basis-1/2 rounded-xl md:border p-4">
            <p className="text-7xl font-semibold animate-pulse">{String(value).padStart(2, '0')}</p>
            <p>{name}</p>
        </div>
    );

    return (
        <div>
            <div className="text-center text-5xl p-10 text-violet-500 font-extrabold">COUNTDOWN TIMER</div>
            <Countdown
                date={targetDate}
                renderer={({ days, hours, minutes, seconds, completed }) => {
                    if (completed) return <span>The competition will begin shortly.</span>;
                    return (
                        <div className="flex justify-between flex-wrap items-center">
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
