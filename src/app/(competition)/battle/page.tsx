"use client";

import { useState, useEffect, MouseEvent } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Puzzle } from "@/types";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { PuzzleCard } from "@/components/PuzzleCard";
import { getPuzzles } from "./actions";
import { Skeleton } from "@/components/ui/skeleton"

import {
    ArrowPathIcon,
    CheckBadgeIcon,
    HandThumbDownIcon,
    HandThumbUpIcon,
    MagnifyingGlassIcon,
    UserIcon
} from "@heroicons/react/24/outline";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input"
import Link from "next/link";
export default function Page() {
    const [betConfirmed, setBetConfirmed] = useState<boolean>(false); // Tracks bet confirmation
    const [betAmount, setBet] = useState<number>(0); // Tracks bet amount

    const [totalPuzzles, setTotalPuzzles] = useState(0);
    const [fetching, setFetching] = useState(false);
    const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
    const [page, setPage] = useState(0);
    const [modalPuzzle, setModalPuzzle] = useState<Puzzle | null>(null);

    useEffect(() => {
        if (betConfirmed) {
            async function fetchPuzzles() {
                setFetching(true);
                const { puzzles: fetchedPuzzles, total } = await getPuzzles(page);
                setFetching(false);
                if (fetchedPuzzles.length <= 0) {
                    return setPage(Math.max(0, page - 1)); // Current page is empty
                }
                setPuzzles(fetchedPuzzles);
                setTotalPuzzles(total); // Update total puzzles
            }
            fetchPuzzles();
        }
    }, [page, betConfirmed]);

    function handleNextPage(e: MouseEvent) {
        e.preventDefault();
        if (fetching) return;
        setPage(page + 1);
    }

    function handlePreviousPage(e: MouseEvent) {
        e.preventDefault();
        if (fetching) return;
        setPage(Math.max(0, page - 1));
    }

    function openModal(index: number) {
        const puzzle = puzzles[index];
        if (!puzzle) return;
        setModalPuzzle(puzzle);
    }

    function closeModal() {
        setModalPuzzle(null);
    }

    // Render the Gamble Modal first if bet is not confirmed
    if (!betConfirmed) {
        return (
            <>
                <div className="z-20 absolute top-0 start-0 w-full min-h-full flex items-center justify-center  backdrop-blur-xl">
                    <div className="max-w-lg w-full p-5 border bg-background rounded-lg shadow-lg">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-6">
                                Place Your Bet <br />
                           div (min 10%)
                            </div>
                            <div className="text-2xl mb-8">{`Bet Amount: ${betAmount} Points`}%</div>
                            <Slider
                                value={[betAmount]} // Current value of the slider
                                onValueChange={(value) => setBet(value[0])} // Update bet amount
                                max={100} // Max slider value
                                step={5} // Slider step increment
                                className="w-full"
                            />
                            <Button
                                onClick={() => setBetConfirmed(true)} // Confirm bet and proceed
                                className="mt-8 bg-green-500 hover:bg-green-600 text-white w-full"
                            >
                                Confirm Bet
                            </Button>
                        </div>
                    </div>
                </div>

            </>
        );
    }

    // Render the Main Content if bet is confirmed
    return (
        <>
            <div
                className={`absolute top-0 start-0 z-50 w-screen h-screen flex justify-center items-center ${modalPuzzle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        closeModal();
                    }}
                    className="absolute h-full w-full backdrop-blur"
                />
                {modalPuzzle ? <Modal puzzle={modalPuzzle} /> : null}
            </div>
            <main className="min-h-full min-w-full flex flex-col">
                <div className="mx-auto w-full max-w-screen-xl flex flex-col gap-3 mb-10">
                    <Card className="shadow">
                        <CardHeader>
                            <CardTitle>Puzzles</CardTitle>
                        </CardHeader>
                        <hr />
                        <CardContent className="p-5">
                            {fetching ? (
                                <div className="w-full h-full flex justify-center items-center">
                                    Loading...
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    <div className="grid grid-cols-2 grid-rows-2 gap-3">
                                        {puzzles.map((puzzle: Puzzle, i) => (
                                            <PuzzleCard
                                                openModal={openModal}
                                                index={i}
                                                key={puzzle.puzzleName + i} // Unique key
                                                puzzle={puzzle}
                                            />
                                        ))}
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            </main>
        </>
    );
}

function Modal({ puzzle }: { puzzle: Puzzle }) {
    return (
        <div className="z-50 transition-none max-w-screen-md w-full p-5 border bg-background rounded-lg">
            <div className="grid-col w-full">
                <div>
                    <div className="flex flex-row gap-3">
                        <div className="me-auto place-content-center">
                            <div className="text-2xl underline text-primary ">
                                {puzzle.puzzleName}
                            </div>
                            <div className="inline-flex gap-2">
                                <div className="font-normal text-sm text-foreground flex items-start pt-1">
                                    <UserIcon className="size-6 mr-2" />
                                    {puzzle.authors.join(", ")}
                                </div>
                                <div className="content-end place-items-end">
                                    <div className="inline-flex gap-2">
                                        <div className="inline-flex">
                                            <CheckBadgeIcon className="size-5" />
                                            <div className="font-normal text-sm">
                                                {puzzle.solves}{" "}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="pb-1 text-primary">Hints:</div>

                            <div className="inline-flex flex-wrap gap-2">
                                {puzzle.hints.map((hint: string, i: number) => (
                                    <Popover key={`${hint}-${i}`}>
                                        <PopoverTrigger
                                            className="w-8 h-8 flex items-center justify-center bg-primary text-black font-bold rounded-full hover:bg-primary-dark transition"
                                            aria-label={`Hint ${i + 1}`} // Corrected syntax
                                        >
                                            {i + 1}
                                        </PopoverTrigger>
                                        <PopoverContent className="p-3 shadow-lg rounded-lg border text-sm">
                                            {hint}
                                        </PopoverContent>
                                    </Popover>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overflow-fit h-full place-content-center">
                <div className="text-4xl font-bold text-primary p-3">
                    {puzzle.puzzleDescription}
                </div>
            </div>
            <div className="me-auto inline-flex w-full ">
                <div className="w-full flex justify-between items-end gap-5">
                    <div className="w-full flex justify-between items-end gap-5">
                        <Input
                            disabled={puzzle.teamSolved}
                            type="flag"
                            placeholder="ACI{....}"
                        />
                        <div className="inline-flex gap-1">
                            {puzzle.teamSolved ? (
                                <div className="text-sm text-green-200 place-content-end pr-1">
                                    Solved
                                </div>
                            ) : null}
                        </div>

                        <Button type="submit" className="bg-green-200">
                            Submit
                        </Button>
                        <Button className="bg-blue-200">
                            <Link href={puzzle.linkToFiles} download="CTF.puzzle">
                                Download Files
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
