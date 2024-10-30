import Countdown from 'react-countdown';

export default function TimerComp() {
  // Define the target date: March 15, 2025
  const targetDate = new Date('2025-03-15T00:00:00');

  interface CountdownRendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed?: boolean;
  }

  const renderer = ({ days, hours, minutes, seconds }: CountdownRendererProps) => {
    return (
      <div className="flex flex-row gap-5">
        {/* Days */}
        <div className="flex flex-col items-center">
          <div className="text-7xl p-4 rounded-md animate-pulse">
            {String(days).padStart(2, '0')}
          </div>
          <div className="text-center">Days</div>
        </div>
        
        {/* Hours */}
        <div className="flex flex-col items-center">
          <div className="text-7xl p-4 rounded-md animate-pulse">
            {String(hours).padStart(2, '0')}
          </div>
          <div className="text-center">Hours</div>
        </div>
        
        {/* Minutes */}
        <div className="flex flex-col items-center">
          <div className="text-7xl p-4 rounded-md animate-pulse">
            {String(minutes).padStart(2, '0')}
          </div>
          <div className="text-center">Minutes</div>
        </div>
        
        {/* Seconds */}
        <div className="flex flex-col items-center">
          <div className="text-7xl p-4 rounded-md animate-pulse">
            {String(seconds).padStart(2, '0')}
          </div>
          <div className="text-center">Seconds</div>
        </div>
      </div>
    );
  };

  return <Countdown date={targetDate} renderer={renderer} />;
}
