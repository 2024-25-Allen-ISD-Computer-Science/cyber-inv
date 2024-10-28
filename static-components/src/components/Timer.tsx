import { useState, useEffect } from "react";

export default function Timer({ timerClassName }: { timerClassName?: string }) {
  // Split the ms into Array<number>[Weeks, Days, Hours, Minutes, Seconds]
  function splitTime(time: number) {
    const timeArray: Array<number> = [];

    // 604,800,000 ms / week
    timeArray.push(Math.floor(time / 604_800_000));
    time -= timeArray[0] * 604_800_000;

    // 86,400,000 ms / day
    timeArray.push(Math.floor(time / 86_400_000));
    time -= timeArray[1] * 86_400_000;

    // 3,600,000 ms / hr
    timeArray.push(Math.floor(time / 3_600_000));
    time -= timeArray[2] * 3_600_000;

    // 60,000 ms / min
    timeArray.push(Math.floor(time / 60_000));
    time -= timeArray[3] * 60_000;

    // 1,000 ms / s
    timeArray.push(Math.floor(time / 1_000));
    time -= timeArray[4] * 1_000;

    return timeArray;
  }

  const eventTime = new Date("2025-03-29T08:00:00").getTime();
  const [timeArray, setTimeArray] = useState<number[]>(splitTime(eventTime - Date.now()));
  const [isOneDayOver, setIsOneDayOver] = useState<boolean | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeLeft = eventTime - Date.now();
      {timeLeft > 0 ? null : timeLeft < -86_400_000 ? setIsOneDayOver(true) : setIsOneDayOver(false)}
      setTimeArray(splitTime(timeLeft));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <>
      {isOneDayOver == null ? (
        <div
          className={`${timerClassName} grid grid-flow-col gap-5 text-center auto-cols-max`}
        >
          <div className="flex flex-col p-2 items-center text-neutral-content">
            <span className="countdown w-fit font-mono text-2xl">
              <span style={{ "--value": timeArray[0] }}></span>
            </span>
            weeks
          </div>
          <div className="flex flex-col p-2 items-center text-neutral-content">
            <span className="countdown w-fit font-mono text-2xl">
              <span style={{ "--value": timeArray[1] }}></span>
            </span>
            days
          </div>
          <div className="flex flex-col p-2 items-center text-neutral-content">
            <span className="countdown w-fit font-mono text-2xl">
              <span style={{ "--value": timeArray[2] }}></span>
            </span>
            hours
          </div>
          <div className="flex flex-col p-2 items-center text-neutral-content">
            <span className="countdown w-fit font-mono text-2xl">
              <span style={{ "--value": timeArray[3] }}></span>
            </span>
            min
          </div>
          <div className="flex flex-col p-2 items-center text-neutral-content">
            <span className="countdown w-fit font-mono text-2xl">
              <span style={{ "--value": timeArray[4] }}></span>
            </span>
            sec
          </div>
        </div>) : isOneDayOver ? (
            <div className={`${timerClassName} text-xl text-white font-bold text-center tracking-widest`}>
                Until Next Year!
            </div>
        ) : (
            <div className={`${timerClassName} text-xl text-rose-600 font-bold text-center tracking-widest`}>
                Event Started!
            </div>
        )
      }
    </>
  );
}
