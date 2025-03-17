'use client';

import { useEffect, useState } from "react";
import PuzzleCard from "@/components/Comp/Puzzle/card";
import { puzzleCard } from "@/components/Comp/Puzzle/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { getPuzzle } from "./action";
import PuzzleDashboardSkeleton from "@/components/Comp/Puzzle/puzzleSkel";

export default function PuzzleDashboard() {
  const [puzzles, setPuzzles] = useState<puzzleCard[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const puzzlesPerPage = 9;

  useEffect(() => {
    async function fetchPuzzles() {
      setIsLoading(true);
      try {
        const result = await getPuzzle(currentPage, puzzlesPerPage);
        setPuzzles(result.puzzles);
        setTotalPages(result.totalPages);
      } catch (error) {
        console.error("Failed to fetch puzzles:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPuzzles();
  }, [currentPage]);

  // Create pagination links
  const renderPaginationLinks = () => {
    const links = [];
    const displayedPages = 5; // Number of pages to display in pagination
    
    // Calculate range of pages to display
    let startPage = Math.max(0, currentPage - Math.floor(displayedPages / 2));
    let endPage = Math.min(totalPages - 1, startPage + displayedPages - 1);
    
    // Adjust if we're near the end
    if (endPage - startPage < displayedPages - 1) {
      startPage = Math.max(0, endPage - displayedPages + 1);
    }
    
    // Add first page
    if (startPage > 0) {
      links.push(
        <PaginationItem key="first">
          <PaginationLink onClick={() => setCurrentPage(0)}>1</PaginationLink>
        </PaginationItem>
      );
      
      // Add ellipsis if needed
      if (startPage > 1) {
        links.push(
          <PaginationItem key="ellipsis-start">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
    }
    
    // Add page numbers
    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={i === currentPage} 
            onClick={() => setCurrentPage(i)}
          >
            {i + 1}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Add ellipsis and last page if needed
    if (endPage < totalPages - 1) {
      if (endPage < totalPages - 2) {
        links.push(
          <PaginationItem key="ellipsis-end">
            <PaginationEllipsis />
          </PaginationItem>
        );
      }
      
      links.push(
        <PaginationItem key="last">
          <PaginationLink onClick={() => setCurrentPage(totalPages - 1)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return links;
  };

  return (
    <main className="w-full h-full flex flex-col justify-center items-center">
      {isLoading ? (
        // Use the imported PuzzleDashboardSkeleton component while loading
        <PuzzleDashboardSkeleton />
      ) : (
        <>
          <div className="rounded-2xl border border-1 border-accent-foreground/30 h-fit w-fit mb-4">
            <div className="grid grid-cols-3 w-full h-full place-items-center p-6 gap-6 max-w-7xl min-w-7xl min-h-2/3 max-h-2/3">
              {puzzles.length > 0 ? (
                // Display puzzles
                puzzles.map((puzzle, index) => (
                  <PuzzleCard
                    key={`puzzle-${index}`}
                    diff={puzzle.diff}
                    pointVal={puzzle.pointVal}
                    puzzleName={puzzle.puzzleName}
                    topic={puzzle.topic}
                    desc={puzzle.desc}
                    isSolved={puzzle.isSolved}
                  />
                ))
              ) : (
                // No puzzles found message
                <div className="col-span-3 text-center py-10">
                  No puzzles found. Please try again later.
                </div>
              )}
            </div>
          </div>
          
          {/* Pagination */}
          <Pagination className="mt-4">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                  aria-disabled={currentPage === 0}
                  className={currentPage === 0 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {renderPaginationLinks()}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(Math.min(totalPages - 1, currentPage + 1))}
                  aria-disabled={currentPage === totalPages - 1}
                  className={currentPage === totalPages - 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </>
      )}
    </main>
  );
}