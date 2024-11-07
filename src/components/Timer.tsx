// CountdownTimer.tsx
"use client";
import Countdown, { CountdownRenderProps } from 'react-countdown';

export default function CountdownTimer() {
  const targetDate = new Date('2025-03-15T00:00:00');

  const renderer = ({ days, hours, minutes, seconds }: CountdownRenderProps) => (
    <div className="flex flex-row gap-5">
      <div className="flex flex-col items-center">
        <div className="text-7xl p-4 rounded-md animate-pulse">
          {String(days).padStart(2, '0')}
        </div>
        <div className="text-center">Days</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-7xl p-4 rounded-md animate-pulse">
          {String(hours).padStart(2, '0')}
        </div>
        <div className="text-center">Hours</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-7xl p-4 rounded-md animate-pulse">
          {String(minutes).padStart(2, '0')}
        </div>
        <div className="text-center">Minutes</div>
      </div>
      <div className="flex flex-col items-center">
        <div className="text-7xl p-4 rounded-md animate-pulse">
          {String(seconds).padStart(2, '0')}
        </div>
        <div className="text-center">Seconds</div>
      </div>
    </div>
  );

  return <Countdown date={targetDate} renderer={renderer} />;
}
