import { Progress } from "@/components/ui/progress"
import { ChartBarIcon, PuzzlePieceIcon, SparklesIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function CompProgBar() {
    return (
        <div className="w-full top-0 left-0  justify-center place-content-center flex mb-5">
            <div className="w-fit h-fit bg-zinc-950 rounded-xl p-2 border border-white border-foreground">
                <div className="w-fit inline-flex justify-between space-x-4 p-3">
                    <div className="text-center">Round Name: Test Name</div>
                    <div className="w-fit inline-flex space-x-2">
                        <Link href={"/dashboard"}>
                            <HoverCard >
                                <HoverCardTrigger>
                                    <ChartBarIcon className="size-8 hover:animate-pulse" />

                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <ChartBarIcon className="size-8" />

                                    Dashboard - Track your and other teams stats.
                                </HoverCardContent>
                            </HoverCard>

                        </Link>

                        <Link href={"/puzzle"}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <PuzzlePieceIcon className="size-8 hover:animate-pulse" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <PuzzlePieceIcon className="size-8" />
                                    Puzzle Round - Solve puzzles in the alloted
                                </HoverCardContent>
                            </HoverCard>

                        </Link>

                        <Link href={"/battle"}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <ShieldExclamationIcon className="size-8 " />

                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <ShieldExclamationIcon className="size-8" />

                                    Battle Round - Put everything on the line to get ahead!
                                </HoverCardContent>
                            </HoverCard>

                        </Link>

                        <Link href={"/scenario"}>
                            <HoverCard>
                                <HoverCardTrigger>
                                    <SparklesIcon className="size-8" />
                                </HoverCardTrigger>
                                <HoverCardContent>
                                    <SparklesIcon className="size-8" />

                                    Scenario Round - Blue team simulation where you and your team defend Allen Texas from cyber security threats.
                                </HoverCardContent>
                            </HoverCard>

                        </Link>
                    </div>



                    <div className="text-center">Time Remaining: 00:00:00 </div>
                </div>

                <Progress value={33} className="text-2xl font-black text-center">

                </Progress>

            </div>
        </div>

    );
}