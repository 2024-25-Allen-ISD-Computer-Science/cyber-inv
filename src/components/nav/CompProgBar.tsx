"use client";
import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { ChartBarIcon, PuzzlePieceIcon, SparklesIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Ico from "~/ico.svg";
import { Button } from "../ui/button";
import Countdown from 'react-countdown';
import Image from "next/image";
import { getRound } from "@/app/(competition)/action";

interface Props {
    roundName: string;
    timeRemaining: Date;
}

export default function CompProgBar({ roundName, timeRemaining }: Props) {
    const [currentRoundType, setCurrentRoundType] = useState<string | null>(null);

    useEffect(() => {
        async function checkRoundType() {
            const currentRound = await getRound();
            console.log("Current Round:", currentRound.roundName); // Debugging: log the current round
            setCurrentRoundType(currentRound.roundName);
        }

        checkRoundType(); // Initial check

        const intervalId = setInterval(checkRoundType, 5000); // Check every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);

    const CountdownSection = ({ name, value }: { name: string; value: number }) => (
        <div className="flex flex-col items-center rounded-xl text-center w-fit">
            <p className="animate-pulse font-semibold">{String(value).padStart(2, '0')}</p>
        </div>
    );

    return (
        <div className="w-full top-0 sticky flex justify-center">
            <div className="w-fit h-fit p-4">
                <div className="bg-background rounded-lg w-full flex items-center justify-between px-4 py-2 shadow-md gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image src={Ico} height={50} width={50} alt="ico" />
                        <span className="text-lg font-bold inline-flex">
                            {roundName}
                            <Countdown
                                date={timeRemaining}
                                renderer={({ hours, minutes, seconds, completed }) => {
                                    if (completed) return <span className="text-red-400 animate-pulse">00:00:00</span>
                                    return (
                                        <div className="flex flex-wrap items-center justify-between">
                                            <CountdownSection name="Hours" value={hours} />
                                            <span className="animate-pulse">:</span>
                                            <CountdownSection name="Minutes" value={minutes} />
                                            <span className="animate-pulse">:</span>
                                            <CountdownSection name="Seconds" value={seconds} />
                                        </div>
                                    );
                                }}
                            />
                        </span>
                    </div>

                    {/* Button Group */}
                    <div className="flex items-center gap-2">
                        <Button variant="secondary">
                            <Link href="/dashboard">
                                <ChartBarIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button disabled={currentRoundType !== "puzzle"} variant="secondary">
                            <Link href="/puzzle">
                                <PuzzlePieceIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button disabled={currentRoundType !== "battle"} variant="secondary">
                            <Link href="/battle">
                                <ShieldExclamationIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                        <Button disabled={currentRoundType !== "scenario"} variant="secondary">
                            <Link href="/scenario">
                                <SparklesIcon className="h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}