import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { MouseEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pb from "@/api/pocketbase";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getPuzzles, Puzzle } from "@/util/api";
import { PuzzleCard } from "@/components/PuzzleCard";
import {
  ArrowPathIcon,
  CheckBadgeIcon,
  HandThumbDownIcon,
  HandThumbUpIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { UserIcon } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

// TODO: Use Suspense

export default function Page() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Check if the user is authenticated on component mount
  useEffect(() => {
    if (!pb.authStore.isValid) {
      // If the user is not authenticated, redirect to the login page
      navigate("/login");
    }
  }, [navigate]); // Runs only once when the component mounts

  const [fetching, setFetching] = useState(false);

  const [puzzles, setPuzzles] = useState<Puzzle[]>([]);

  const [page, setPage] = useState(0);

  // useEffect(() => {
  //   async function fetchPuzzles() {
  //     setFetching(true);

  //     const fetchedPuzzles = await getPuzzles(page);

  //     setFetching(false);

  //     if (fetchedPuzzles.length <= 0) return setPage(Math.max(0, page - 1)); // current page is empty
  //     setPuzzles(fetchedPuzzles);
  //   }

  //   fetchPuzzles();
  // }, [page]);

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

  return (
    <>
      <div
        className={`absolute top-0 start-0 z-50 w-screen h-screen flex justify-center items-center ${
          modalPuzzle
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            closeModal();
          }}
          className="absolute h-full w-full backdrop-blur"
        />
        {modalPuzzle ? <Modal puzzle={modalPuzzle} /> : <></>}
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
                  <ArrowPathIcon className="size-16 animate-spin my-64" />
                </div>
              ) : (
                <div className="flex flex-col gap-3">
                  <label className="shadow border rounded-lg items-center flex flex-row ">
                    <MagnifyingGlassIcon className="size-4 m-3 aspect-square" />
                    <input
                      type="text"
                      className="w-full bg-transparent p-3 outline-none ps-0"
                    ></input>
                  </label>
                  <div className="grid grid-cols-3 grid-rows-3 gap-3">
                    {puzzles.map((puzzle: Puzzle, i) => {
                      return (
                        <PuzzleCard
                          openModal={openModal}
                          index={i}
                          key={i}
                          puzzle={puzzle}
                        />
                      );
                    })}
                  </div>
                  <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious
                          onClick={handlePreviousPage}
                          className="cursor-pointer"
                        />
                      </PaginationItem>

                      <PaginationItem>
                        <PaginationNext
                          onClick={handleNextPage}
                          className="cursor-pointer"
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
                    <div className="inline-flex">
                      <HandThumbUpIcon className="size-5" />
                      <div className="font-normal text-sm">68% </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="pb-1 text-primary">Hints:</div>

              <div className="inline-flex gap-2">
                {puzzle.hints.map((Hint: string) => (
                  <Popover>
                    <PopoverTrigger>
                      <Button>{puzzle.hints.indexOf(Hint) + 1}</Button>
                    </PopoverTrigger>
                    <PopoverContent>{Hint}</PopoverContent>
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
              <Link to={puzzle.linkToFiles} download="CTF.puzzle">
                Download Files
              </Link>
            </Button>
          </div>
          <div className=" gap-1 inline-flex">
            <Button>
              <HandThumbUpIcon className="size-4" />
            </Button>
            <Button>
              <HandThumbDownIcon className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
