"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import Countdown from 'react-countdown';
import Image from "next/image";
import Ico from "~/ico.svg";
import Link from "next/link";
import { ChartBarIcon, PuzzlePieceIcon, ShieldExclamationIcon, SparklesIcon } from "@heroicons/react/20/solid";
import { RoundInfo } from "@/server";
const timeRemaining = await RoundInfo().then((round) => round.roundEnd);
const roundName = await RoundInfo().then((round) => round.roundName);
const currentRoundType = await RoundInfo().then((round) => round.roundType);
export default function CompProgBar() {


    const CountdownSection = ({ name, value }: { name: string; value: number }) => (
        <div className="flex flex-col items-center rounded-xl text-center w-fit">
            <p className="animate-pulse font-semibold">{String(value).padStart(2, '0')}</p>
        </div>
    );

    return (
        <div className="z-10 top-0 sticky flex justify-center overflow-x-hidden max-w-1/2 line-clamp-0">
            <div className="w-fit h-fit p-4">
                <div className="bg-background rounded-lg w-full flex items-center justify-between px-4 py-2 shadow-md gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <Image src={Ico} height={50} width={50} alt="ico" />
                        <span className="text-lg font-bold inline-flex">
                            <span className="flex text-lg w-fit max-w-[57.5vw] font-bold inline-flex truncate overflow-hidden text-ellipsis whitespace-nowrap">
                                {roundName}
                            </span>
                            {'\xa0'} ~ {'\xa0'}
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
                        <Button variant="secondary" className="-p-4">
                            <Link href="/dashboard" className="p-4">
                                <ChartBarIcon/>
                            </Link>
                        </Button>
                        <Button disabled={currentRoundType !== "puzzle"} variant="secondary" className="-p-4">
                            <Link href="/puzzle" className="p-4">
                                <PuzzlePieceIcon/>
                            </Link>
                        </Button>
                        <Button disabled={currentRoundType !== "battle"} variant="secondary" className="-p-4">
                            <Link href="/battle" className="p-4">
                                <ShieldExclamationIcon/>
                            </Link>
                        </Button>
                        <Button disabled={currentRoundType !== "scenario"} variant="secondary" className="-p-4">
                            <Link href="/scenario" className="p-4">
                                <SparklesIcon/>
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}