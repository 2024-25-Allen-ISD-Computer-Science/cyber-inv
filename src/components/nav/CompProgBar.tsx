"use client";
import { Progress } from "@/components/ui/progress"
import { ChartBarIcon, PuzzlePieceIcon, SparklesIcon, ShieldExclamationIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Ico from "~/ico.svg"
import { Button } from "../ui/button";
import Countdown from 'react-countdown';
import Image from "next/image";
interface Props {
    roundName: string;
    timeRemaining: Date;
}

export default function CompProgBar({ roundName, timeRemaining }: Props) {

    const CountdownSection = ({ name, value }: { name: string; value: number }) => (
        <div className="flex flex-col items-center rounded-xl  text-center  w-fit ">
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
                        <span className="text-lg font-bold inline-flex ">
                            {roundName}~
                            <Countdown
                                date={timeRemaining}
                                renderer={({ hours, minutes, seconds, completed }) => {
                                    if (completed) return <span className="text-red-400 animate-pulse">00:00:00</span>
                                    return (
                                        <div className="flex flex-wrap items-center justify-between">

                                            <CountdownSection name="Hours" value={hours} />
                                            <span className="animate-pulse">
                                                :
                                            </span>
                                            <CountdownSection name="Minutes" value={minutes} />
                                            <span className="animate-pulse">
                                                :
                                            </span>
                                            <CountdownSection name="Seconds" value={seconds} />
                                        </div>
                                    );
                                }}
                            />
                        </span>
                    </div>

                    {/* Button Group */}
                    <div className="flex items-center gap-2">
                        <Button variant="secondary" className="w-fit h-fit"  >
                            <Link href={"/dashboard"} >
                                <ChartBarIcon className="size-10" />
                            </Link>
                        </Button>
                        <Button variant="secondary" className="w-fit h-fit" disabled={!(roundName === "puzzle")}>
                            <Link href={"/puzzle"}>
                                <PuzzlePieceIcon className="size-10" />
                            </Link>
                        </Button>

                        <Button variant="secondary" className="w-fit h-fit" disabled={!(roundName === "battle")}>
                            <Link href={"/battle"}>
                                <SparklesIcon className="size-10" />
                            </Link>
                        </Button>

                        <Button variant="secondary" className="w-fit h-fit" disabled={!(roundName === "scenario")}>
                            <Link href={"/scenario"}>
                                <ShieldExclamationIcon className="size-10" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// export default function CompProgBar() {
//     return (
//         <div className="w-full top-0 left-0  justify-center place-content-center flex mb-5">
//             <div className="w-fit h-fit bg-zinc-950 rounded-xl p-2 border border-white border-foreground">
//                 <div className="w-fit inline-flex justify-between space-x-4 p-3">
//                     <div className="text-center">Round Name: Test Name</div>
//                     <div className="w-fit inline-flex space-x-2">
//                         <Link href={"/dashboard"}>
//                             <ChartBarIcon className="size-8 hover:animate-pulse" />
//                         </Link>
//                         <Link href={"/puzzle"}>
//                             <PuzzlePieceIcon className="size-8 hover:animate-pulse" />
//                         </Link>
//                         <Link href={"/battle"}>
//                             <ShieldExclamationIcon className="size-8 " />
//                         </Link>
//                         <Link href={"/scenario"}>
//                             <SparklesIcon className="size-8" />

//                         </Link>
//                     </div>
//                     <div className="text-center">Time Remaining: 00:00:00 </div>
//                 </div>

//                 <Progress value={33} className="text-2xl font-black text-center">

//                 </Progress>

//             </div>
//         </div>

//     );
// }