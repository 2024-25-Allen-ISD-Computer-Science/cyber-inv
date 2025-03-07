"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MouseEvent, useEffect, useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { getPuzzles } from "./actions"
import { Puzzle } from "@/types";
import { PuzzleCard } from "@/components/PuzzleCard";
import {
    ArrowPathIcon,
    CheckBadgeIcon,
    HandThumbDownIcon,
    HandThumbUpIcon,
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { UserIcon } from "lucide-react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
} from "@/components/ui/popover";
import { redirect } from 'next/navigation'// TODO: Use Suspense
import { getRound } from "../action";
export default function Page() {
    const [searchQuery, setSearchQuery] = useState(""); // Add state for search
    const [totalPuzzles, setTotalPuzzles] = useState(0);
    const [fetching, setFetching] = useState(false);
    const [puzzles, setPuzzles] = useState<Puzzle[]>([]);
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");
    const [currentRoundType, setCurrentRoundType] = useState<string | null>(null);


    useEffect(() => {
        async function checkRoundType() {
            const currentRound = await getRound();
            setCurrentRoundType(currentRound.roundType);
            if (currentRound.roundType !== "puzzle") {
                redirect('/dashboard');
            }
        }

        checkRoundType(); // Initial check

        const intervalId = setInterval(checkRoundType, 5000); // Check every 5 seconds

        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
    vd
    useEffect(() => {
        async function fetchPuzzles() {
            setFetching(true);
            const { puzzles: fetchedPuzzles, total } = await getPuzzles(page, puzzlesPerPage, searchQuery);
            setFetching(false);

            if (fetchedPuzzles.length <= 0) {
                setPage((prevPage) => Math.max(0, prevPage - 1)); // Go back if the page is empty
                return;
            }

            setPuzzles(fetchedPuzzles);
            setTotalPuzzles(total);
        }

        fetchPuzzles();
    }, [page, searchQuery]); // Fetch puzzles whenever `page` or `searchQuery` changes

    const puzzlesPerPage = 9; // Same limit as in `getPuzzles`
    const totalPages = Math.ceil(totalPuzzles / puzzlesPerPage);

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


    const [modalPuzzle, setModalPuzzle] = useState<Puzzle | null>(null);

    function openModal(index: number) {
        const puzzle = puzzles[index];
        if (!puzzle) return;
        setModalPuzzle(puzzle);
    }

    function closeModal() {
        setModalPuzzle(null);
    }
    // Filter puzzles based on search query
    const filteredPuzzles = puzzles.filter((puzzle) =>
        puzzle.puzzleName.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <>
            {/* Modal Overlay */}
            <div
                className={`absolute top-0 left-0 z-50 w-screen h-screen flex justify-center items-center ${
                    modalPuzzle ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
            >
                {/* Modal Close Button */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        closeModal();
                    }}
                    className="absolute h-full w-full backdrop-blur"
                />
                {modalPuzzle && <Modal puzzle={modalPuzzle} />}
            </div>
    
            {/* Main Content */}
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
                                    <ArrowPathIcon className="w-16 h-16 animate-spin my-64" />
                                </div>
                            ) : (
                                <div className="flex flex-col gap-3">
                                    {/* Search Bar */}
                                    <label className="shadow border rounded-lg items-center flex flex-row">
                                        <MagnifyingGlassIcon className="w-4 h-4 m-3" />
                                        <input
                                            type="text"
                                            className="w-full bg-transparent p-3 outline-none"
                                            placeholder="Search puzzles..."
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                        />
                                        <Button
                                            variant="default"
                                            onClick={() => {
                                                if (search.trim()) {
                                                    setSearchQuery(search);
                                                    setSearch("");
                                                    setPage(0);
                                                }
                                            }}
                                        >
                                            {">"}
                                        </Button>
                                        <Button
                                            variant="default"
                                            onClick={() => {
                                                setSearchQuery("");
                                                setPage(0);
                                            }}
                                        >
                                            X
                                        </Button>
                                    </label>
    
                                    {/* Puzzle Grid */}
                                    <div className="grid grid-cols-3 grid-rows-3 gap-3">
                                        {puzzles.map((puzzle: Puzzle, i) => (
                                            <PuzzleCard
                                                openModal={openModal}
                                                index={i}
                                                key={`${puzzle.puzzleName}-${i}`}
                                                puzzle={puzzle}
                                            />
                                        ))}
                                    </div>
    
                                    {/* Pagination */}
                                    <Pagination>
                                        <PaginationContent>
                                            <PaginationItem>
                                                <PaginationPrevious
                                                    onClick={handlePreviousPage}
                                                    className={`cursor-pointer ${page <= 0 ? "opacity-50" : ""}`}
                                                />
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationNext
                                                    onClick={handleNextPage}
                                                    className={`cursor-pointer ${page >= totalPages - 1 ? "opacity-50" : ""}`}
                                                />
                                            </PaginationItem>
                                        </PaginationContent>
                                    </Pagination>
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
                                        {/* <div className="inline-flex">
                                            <HandThumbUpIcon className="size-5" />
                                            <div className="font-normal text-sm">68% </div>
                                        </div> */}
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
                                            aria-label={`Hint ${i + 1}`} // Accessibility improvement
                                        >
                                            {i + 1}
                                        </PopoverTrigger>
                                        <PopoverContent className="p-3  shadow-lg rounded-lg border text-sm">
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
                    {/* <div className=" gap-1 inline-flex">
                        <Button>
                            <HandThumbUpIcon className="size-4" />
                        </Button>
                        <Button>
                            <HandThumbDownIcon className="size-4" />
                        </Button>
                    </div> */}
                </div>
            </div>
        </div>
    );
}